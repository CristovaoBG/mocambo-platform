const fullContext = require.context('../assets/gallery', false, /\.(png|jpe?g)$/i);
const thumbContext = require.context('../assets/gallery/thumbs', false, /\.(png|jpe?g)$/i);

const thumbsByName = thumbContext.keys().reduce((acc, key) => {
  acc[key.replace('./', '')] = thumbContext(key);
  return acc;
}, {});

const images = fullContext
  .keys()
  .sort((a, b) =>
    a.localeCompare(b, 'pt', { numeric: true, sensitivity: 'base' })
  )
  .map((key) => {
    const name = key.replace('./', '');
    return {
      id: name,
      full: fullContext(key),
      thumb: thumbsByName[name],
    };
  });

export default images;
