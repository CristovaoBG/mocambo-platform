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
  }
  img{
    height: 750px;
    width: auto;
    max-height: 100%;
    object-fit: contain;
  }
</style>