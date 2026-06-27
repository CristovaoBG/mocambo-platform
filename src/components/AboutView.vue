<template>
<div class="container">
  <div class="row">
    <div class="col">
        <p class="about" style="margin-top:61px">Situado a apenas 10 minutos do coração de Brasília, nosso espaço oferece um salão espaçoso e jardins externos encantadores, que proporcionam o cenário ideal para qualquer ocasião especial.</p>
    </div>
  </div>
  <div class="row">
    <div class="col">
        <ul class="features" ref="features">
            <li>Salão com capacidade para 200 lugares</li>
            <li>Estacionamento amplo e de fácil acesso</li>
            <li>Pista de dança</li>
            <li>Espaço Bar & Lounge</li>
            <li>Cozinha profissional</li>
            <li>Ampla área externa</li>
        </ul>
    </div>
  </div>
</div>

</template>

<script setup>
import { ref, onMounted } from 'vue'

const features = ref(null)

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lis = features.value.querySelectorAll('li');
          lis.forEach((li) => {
            li.style.animationPlayState = "running"
          })
        }
    });
});

onMounted(() => {
  if (features.value) {
    observer.observe(features.value);
  }
});
</script>


<style scoped>
  .about{
    text-align: left;
    margin-left: 17%;
    margin-right: 17%;
    font: normal normal normal 16px/26px Roboto;
    letter-spacing: 0px;
    color: #242D21;
    opacity: 1;
  }

  .features{
    text-align: left;
    margin-left: 17%;
    margin-right: 5%;
    text-align: left;
    font: normal normal normal 20px/50px Roboto;
    letter-spacing: 0px;
    color: #242D21;
    list-style-type: none;
    padding: 0;
    text-align: left;
  }

  @keyframes fadein {
          from {
              opacity: 0;
          }
          to {
              opacity: 1;
          }
      }

    li {
      opacity: 0;
      border-bottom: 1px solid #ccc; /* Adicionar uma borda inferior com cor cinza claro */
      padding: 10px 0; /* Adicionar um espaçamento interno para separar os itens */
      color: #242D21;
      animation: fadein 1s forwards;
      animation-play-state: paused;
    }

    li:nth-child(1) {
      animation-delay: 0s; /* Sem atraso */
    }
    li:nth-child(2) {
      animation-delay: 0.3s; /* 1 segundo de atraso */
    }
    li:nth-child(3) {
      animation-delay: 0.6s; /* 2 segundos de atraso */
    }
    li:nth-child(4) {
      animation-delay: 0.9s; /* 3 segundos de atraso */
    }
    li:nth-child(5) {
      animation-delay: 1.2s; /* 3 segundos de atraso */
    }
    li:nth-child(6) {
      animation-delay: 1.5s; /* 3 segundos de atraso */
      border-bottom: none; 
    }

  
  @media (max-width: 767px){
    .about{
        text-align: center;
        margin-left: 0%;
        margin-right: 0%;
    }
    .features{
        text-align: center;
        margin-left: 0%;
        margin-right: 0%;
    }
  }

</style>