const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.join(__dirname, '../src/assets');
const galleryDir = path.join(assetsDir, 'gallery');
const imagePattern = /\.(png|jpe?g)$/i;

const DISPLAY_WIDTHS = [800, 1600];
const WEBP_QUALITY = 75;
const JPEG_QUALITY = 78;

const jobs = [
  {
    sourceDir: galleryDir,
    thumbsDir: path.join(galleryDir, 'thumbs'),
    displayDir: path.join(galleryDir, 'display'),
    files: null,
  },
  {
    sourceDir: assetsDir,
    thumbsDir: path.join(assetsDir, 'thumbs'),
    displayDir: path.join(assetsDir, 'display'),
    files: ['entrada.jpg', 'Grupo 32.png'],
  },
];

function stemFromFilename(file) {
  return file.replace(/\.(png|jpe?g)$/i, '');
}

function isFresh(sourcePath, targetPath) {
  if (!fs.existsSync(targetPath)) {
    return false;
  }

  const sourceStat = fs.statSync(sourcePath);
  const targetStat = fs.statSync(targetPath);
  return targetStat.mtimeMs >= sourceStat.mtimeMs;
}

async function generateThumb(sourcePath, targetPath) {
  if (isFresh(sourcePath, targetPath)) {
    return;
  }

  await sharp(sourcePath)
    .resize({ width: 40, withoutEnlargement: true })
    .jpeg({ quality: 40, progressive: true })
    .toFile(targetPath);

  console.log(`Generated thumb: ${path.basename(sourcePath)}`);
}

async function generateDisplayVariant(sourcePath, targetPath, width, format) {
  if (isFresh(sourcePath, targetPath)) {
    return;
  }

  let pipeline = sharp(sourcePath).resize({
    width,
    withoutEnlargement: true,
  });

  if (format === 'webp') {
    pipeline = pipeline.webp({ quality: WEBP_QUALITY });
  } else {
    pipeline = pipeline.jpeg({
      quality: JPEG_QUALITY,
      progressive: true,
      mozjpeg: true,
    });
  }

  await pipeline.toFile(targetPath);
  console.log(`Generated display: ${path.basename(targetPath)}`);
}

async function generateForFile(job, file) {
  const sourcePath = path.join(job.sourceDir, file);
  if (!fs.existsSync(sourcePath)) {
    console.warn(`Skipping missing image: ${file}`);
    return;
  }

  await generateThumb(sourcePath, path.join(job.thumbsDir, file));

  const stem = stemFromFilename(file);

  await Promise.all(
    DISPLAY_WIDTHS.flatMap((width) => [
      generateDisplayVariant(
        sourcePath,
        path.join(job.displayDir, `${stem}-${width}w.webp`),
        width,
        'webp'
      ),
      generateDisplayVariant(
        sourcePath,
        path.join(job.displayDir, `${stem}-${width}w.jpg`),
        width,
        'jpeg'
      ),
    ])
  );
}

async function generateThumbs() {
  for (const job of jobs) {
    for (const dir of [job.thumbsDir, job.displayDir]) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    }

    const files =
      job.files ||
      fs.readdirSync(job.sourceDir).filter((file) => imagePattern.test(file));

    await Promise.all(files.map((file) => generateForFile(job, file)));
  }
}

generateThumbs().catch((error) => {
  console.error('Failed to generate image variants:', error);
  process.exit(1);
});
