const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.join(__dirname, '../src/assets');
const galleryDir = path.join(assetsDir, 'gallery');
const imagePattern = /\.(png|jpe?g)$/i;

const jobs = [
  {
    sourceDir: galleryDir,
    thumbsDir: path.join(galleryDir, 'thumbs'),
    files: null,
  },
  {
    sourceDir: assetsDir,
    thumbsDir: path.join(assetsDir, 'thumbs'),
    files: ['entrada.jpg', 'Grupo 32.png'],
  },
];

async function generateThumb(sourcePath, targetPath) {
  const sourceStat = fs.statSync(sourcePath);
  const targetExists = fs.existsSync(targetPath);

  if (targetExists) {
    const targetStat = fs.statSync(targetPath);
    if (targetStat.mtimeMs >= sourceStat.mtimeMs) {
      return;
    }
  }

  await sharp(sourcePath)
    .resize({ width: 40, withoutEnlargement: true })
    .jpeg({ quality: 40, progressive: true })
    .toFile(targetPath);

  console.log(`Generated thumb: ${path.basename(sourcePath)}`);
}

async function generateThumbs() {
  for (const job of jobs) {
    if (!fs.existsSync(job.thumbsDir)) {
      fs.mkdirSync(job.thumbsDir, { recursive: true });
    }

    const files =
      job.files ||
      fs.readdirSync(job.sourceDir).filter((file) => imagePattern.test(file));

    await Promise.all(
      files.map(async (file) => {
        const sourcePath = path.join(job.sourceDir, file);
        if (!fs.existsSync(sourcePath)) {
          console.warn(`Skipping missing image: ${file}`);
          return;
        }

        await generateThumb(sourcePath, path.join(job.thumbsDir, file));
      })
    );
  }
}

generateThumbs().catch((error) => {
  console.error('Failed to generate thumbnails:', error);
  process.exit(1);
});
