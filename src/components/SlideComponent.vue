<template>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
        <img src="https://cdn0.casamentos.com.br/vendor/2204/3_2/960/jpg/foto-64_13_142204.jpeg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
        <img src="https://cdn0.casamentos.com.br/vendor/2204/3_2/960/jpg/foto-64_13_142204.jpeg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
        <img src="https://cdn0.casamentos.com.br/vendor/2204/3_2/960/jpg/foto-64_13_142204.jpeg" class="d-block w-100" alt="...">
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
    </div>
</template>

<script>
const imagens = {};
const imagensContext = require.context('@/assets/carousel/', false, /\.png$|\.jpg$/);
imagensContext.keys().forEach(caminho => {
  const nomeImagem = caminho.split('/').pop().split('.')[0];
  imagens[nomeImagem] = imagensContext(caminho);
});

export default {
  data() {
    return {
      imagens,
    };
  },
};
</script>

<style scoped>
.d-block{
    max-height: 500px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
