<template>
    <div class ="entrance">
      <img class="imagem" :src="require('@/assets/entrada.jpg')"  alt="Foto da entrada">
    </div>
</template>

<style scoped>
  .entrance{
    background: #EFEFEF;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border: 0;
    width: 100%;
  }
  img{
    width: 100%;
    max-width: 100%;
    height: auto;
    max-height: 750px;
    object-fit: cover;
  }
</style>