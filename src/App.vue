<template>
  <MainPage />
</template>

<script>
import MainPage from './components/MainPage.vue'

export default {
  components: {
    MainPage,
  },
}
</script>

<style>
.visible{
  transition: transform 2s ease, opacity 2s ease !important;
  opacity: 1 !important;
}

.invisible{
  opacity: 0 !important;
}
</style>
