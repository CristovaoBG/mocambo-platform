<template>
  <div class="entrance">
    <ProgressiveImage
      :full="full"
      :srcset="srcset"
      :webp-srcset="webpSrcset"
      :thumb="thumb"
      sizes="(min-width: 768px) 50vw, 100vw"
      alt="Foto da entrada"
    />
  </div>
</template>

<script>
import ProgressiveImage from './ProgressiveImage.vue';

const jpeg800 = require('@/assets/display/entrada-800w.jpg');
const jpeg1600 = require('@/assets/display/entrada-1600w.jpg');
const webp800 = require('@/assets/display/entrada-800w.webp');
const webp1600 = require('@/assets/display/entrada-1600w.webp');

export default {
  components: {
    ProgressiveImage,
  },

  data() {
    return {
      full: jpeg1600,
      thumb: require('@/assets/thumbs/entrada.jpg'),
      srcset: `${jpeg800} 800w, ${jpeg1600} 1600w`,
      webpSrcset: `${webp800} 800w, ${webp1600} 1600w`,
    };
  },
};
</script>

<style scoped>
.entrance {
  width: 100%;
  overflow: hidden;
  aspect-ratio: 2000 / 1333;
}

@media (min-width: 768px) {
  .entrance {
    height: 100%;
    aspect-ratio: auto;
  }
}
</style>
