// src/utils/importImages.js

const importImages = (r) => {
    let images = {};
    r.keys().forEach(item => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }
  
  const images = importImages(require.context('../assets/gallery', false, /\.(png|jpe?g|svg)$/));
  
  export default images;