<template>
  <div style="position: relative; margin-bottom: 0;" >
    <div style="position: absolute; background-color: var(--verde-escuro); width: 100%; height: 143px;"></div>
    <Carousel ref="carouselRef" :items-to-show="itemsToShow">
      <slide v-for="(image) in images" :key="image">
        <div :class="{'imgcontainer': true}">
          <img :src="image" :class="{'c-image': true, 'd-flex': true}">
        </div>
      </slide>
    </carousel>
  <btn class="next-btn" @click="nextBtnClicked"></btn>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import images from '@/utils/importImages';


export default {
  components: {
    Carousel,
    Slide,
  },

  data() {
    return{
      images,
    }
  },  
  mounted(){
    
  },
  computed: {
    itemsToShow() {
      const mediaQuery = window.matchMedia('(max-width: 767px)');
      return mediaQuery.matches ? 1 : 1.5;
    }
  },
  methods:{
    nextBtnClicked(){
      this.$refs.carouselRef.next()
      console.log("click")
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

  .next-btn{
    width: 105px;
    height: 99px;
    right: 24px;
    top: 340px;
    position: absolute;
    background: transparent url('../assets/Caminho 69.svg') 0% 0% no-repeat padding-box;
    background-size: cover;
    z-index: 100
  }
  
}
</style>

<!-- global -->
<style>
.carousel__track {
  margin-bottom: 0px;
}


</style>

