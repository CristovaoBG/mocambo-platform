const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const galleryDir = path.join(__dirname, '../src/assets/gallery');
const thumbsDir = path.join(galleryDir, 'thumbs');

if (!fs.existsSync(thumbsDir)) {
  fs.mkdirSync(thumbsDir, { recursive: true });
}

const imagePattern = /\.(png|jpe?g)$/i;

async function generateThumbs() {
  const files = fs.readdirSync(galleryDir).filter((file) => imagePattern.test(file));

  await Promise.all(
    files.map(async (file) => {
      const sourcePath = path.join(galleryDir, file);
      const targetPath = path.join(thumbsDir, file);

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

      console.log(`Generated thumb: ${file}`);
    })
  );
}

generateThumbs().catch((error) => {
  console.error('Failed to generate gallery thumbnails:', error);
  process.exit(1);
});
