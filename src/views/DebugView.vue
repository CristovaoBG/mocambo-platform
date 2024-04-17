<template>
  <div style="position: relative">
    <div style="position: absolute; background-color: var(--verde-escuro); width: 100%; height: 100px;"></div>
    <carousel :items-to-show="itemsToShow">
      <slide v-for="(image) in images" :key="image">
        <div :class="{'imgcontainer': true}">
          <img :src="image" :class="{'c-image': true, 'd-flex': true}">
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import images from '@/utils/importImages';

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return{
      images,
    }
  },
  computed: {
    itemsToShow() {
      const mediaQuery = window.matchMedia('(max-width: 767px)');
      return mediaQuery.matches ? 1 : 1.5;
    }
  }
}
</script>

<style scoped lang="scss">

.imgcontainer{
  height: 846px;
  width: 99%; 
  background-size: cover; /* faz com que a imagem cubra toda a área da div */
  background-position: center; /* centraliza a imagem na div */
  background-color: rgb(119, 160, 173); /* cor de fundo da div */
}
.c-image{
  // height: 846px;
  // width: 1147px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 767px){
  .imgcontainer{
    width: 100%; 
  }
}

 .carousel__slide {
   scroll-snap-stop: auto;
   flex-shrink: 0;
   margin: 0px;
   position: relative;
   width: 100px;
   display: flex;
   justify-content: center;
   align-items: center;
   /* Fix iOS scrolling #22 */
   transform: translateZ(0);
   transition: transform 0.5s ease; /* suaviza a animação */
 }
</style>
