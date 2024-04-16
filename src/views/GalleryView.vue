<template>
    <div class="hello">
        <h1>Galeria</h1>
        <p>
        Olha quanta foto foda
        </p>
        <SlideComponent/>
        <!-- <img v-for="(image, name) in images" :key="name" :src="image" :alt="name"> -->
    </div>
</template>


<script>
import images from '@/utils/importImages';
import SlideComponent from '../components/SlideComponent.vue'

export default {
  data() {
    return {
      images
    }
  },
  components:{
    SlideComponent
  }
}


</script>
