const thumbContext = require.context(
  '../assets/gallery/thumbs',
  false,
  /\.(png|jpe?g)$/i
);
const displayContext = require.context(
  '../assets/gallery/display',
  false,
  /\.(webp|jpe?g)$/i
);

const thumbsByName = thumbContext.keys().reduce((acc, key) => {
  acc[key.replace('./', '')] = thumbContext(key);
  return acc;
}, {});

const displayByKey = displayContext.keys().reduce((acc, key) => {
  acc[key.replace('./', '')] = displayContext(key);
  return acc;
}, {});

function findThumb(stem) {
  return (
    thumbsByName[`${stem}.jpg`] ||
    thumbsByName[`${stem}.jpeg`] ||
    thumbsByName[`${stem}.png`]
  );
}

function displayUrl(stem, width, ext) {
  return displayByKey[`${stem}-${width}w.${ext}`];
}

function srcsetFor(stem, ext) {
  const w800 = displayUrl(stem, 800, ext);
  const w1600 = displayUrl(stem, 1600, ext);

  if (!w800 || !w1600) {
    return undefined;
  }

  return `${w800} 800w, ${w1600} 1600w`;
}

const stems = [
  ...new Set(
    Object.keys(displayByKey)
      .map((name) => {
        const match = name.match(/^(.+)-(\d+)w\.(webp|jpe?g)$/i);
        return match ? match[1] : null;
      })
      .filter(Boolean)
  ),
].sort((a, b) =>
  a.localeCompare(b, 'pt', { numeric: true, sensitivity: 'base' })
);

const images = stems
  .map((stem) => {
    const full = displayUrl(stem, 1600, 'jpg');
    const thumb = findThumb(stem);

    if (!full || !thumb) {
      return null;
    }

    return {
      id: stem,
      full,
      thumb,
      srcset: srcsetFor(stem, 'jpg'),
      webpSrcset: srcsetFor(stem, 'webp'),
    };
  })
  .filter(Boolean);

export default images;
