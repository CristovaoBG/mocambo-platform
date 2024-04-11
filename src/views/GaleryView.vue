<template>
    <div class="hello">
        <h1>Galeria</h1>
        <p>
        Olha quanta foto foda
        </p>
        <img v-for="(image, name) in images" :key="name" :src="image" :alt="name">
    </div>
</template>


<script>
import images from '@/utils/importImages';

export default {
  data() {
    return {
      images
    }
  }
}
</script>
