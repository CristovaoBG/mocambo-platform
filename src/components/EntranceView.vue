<template>
    <div class="entrance">
      <img class="imagem" :src="require('@/assets/entrada.jpg')" alt="Foto da entrada">
    </div>
</template>

<style scoped>
  .entrance {
    width: 100%;
    overflow: hidden;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    .entrance {
      height: 100%;
    }

    img {
      height: 100%;
    }
  }
</style>
