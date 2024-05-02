<template>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" @sliding="() => console.log('ok')">
      <div class="carousel-inner">
        <!-- primeira imagem -->
        <div class="carousel-item active">
        <img src="https://cdn0.casamentos.com.br/vendor/2204/3_2/960/jpg/foto-64_13_142204.jpeg" class="d-block c-image" alt="...">
      </div>
      <!-- as outras -->
      <div v-for="(image, name) in images" :key="name" :src="image">
        <div class="carousel-inner">
          <div v-for="(image, name) in images" :key="name" class="carousel-item">
            <div class="imagewrapper">
              <img :src="image" :class="{'c-image': true, 'd-flex': true}">
              <p v-show="!sliding">e esse texto aqui?</p>    
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    <!-- <img v-for="(image, name) in images" :key="name" :src="image" :alt="name"> -->
    </div>
</template>

<script>
import images from '@/utils/importImages';
export default {
  data() {
    return {
      images,
      }
    }
  }
</script>

<style scoped>

.c-image{
  height: 846px;
  width: 1147px;
  object-fit: cover;
}
/* .carousel-item{
  width: 1147px
} */




</style>
