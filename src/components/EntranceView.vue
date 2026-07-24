<template>
  <div class="entrance">
    <ProgressiveImage
      :full="full"
      :thumb="thumb"
      alt="Foto da entrada"
    />
  </div>
</template>

<script>
import ProgressiveImage from './ProgressiveImage.vue';

export default {
  components: {
    ProgressiveImage,
  },

  data() {
    return {
      full: require('@/assets/entrada.jpg'),
      thumb: require('@/assets/thumbs/entrada.jpg'),
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
