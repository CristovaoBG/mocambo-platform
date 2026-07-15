<template>
  <div class="about-panel">
    <p class="about-intro">
      Os jardins do Mocambo trazem a natureza para o coração da sua festa, harmonizando o verde e o colorido da decoração, unindo os espaços numa única vibração.
    </p>

    <h2 class="about-heading">O que oferecemos</h2>

    <ul class="features" ref="featuresEl">
      <li v-for="feature in features" :key="feature">{{ feature }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const features = [
  'Salão com capacidade para 200 lugares',
  'Boate com Espaço para Bar e Louge',
  'Opção de Pista de dança e Iluminação',
  'Cozinha profissional',
  'Ampla área externa',
  'Amplo estacionamento',
  'Excelente acesso',
  'Internet',
]

const featuresEl = ref(null)

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return
    entry.target.querySelectorAll('li').forEach((li) => {
      li.style.animationPlayState = 'running'
    })
  })
})

onMounted(() => {
  if (featuresEl.value) observer.observe(featuresEl.value)
})
</script>

<style scoped>
.about-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: clamp(2rem, 5vw, 3rem) 12%;
}

.about-intro {
  text-align: left;
  font: normal normal normal 16px/26px roboto, sans-serif;
  color: #242d21;
  margin: 0 0 2.25rem;
}

.about-heading {
  font-family: 'adobe-caslon-pro', serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--verde);
  text-align: left;
  margin: 0 0 1.25rem;
}

.features {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  color: #242d21;
}

@keyframes fadein {
  from {
    opacity: 0;
    transform: translateX(-8px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.features li {
  opacity: 0;
  border-bottom: 1px solid rgba(36, 45, 33, 0.15);
  padding: 0.75rem 0;
  font: normal normal normal 15px/1.4 roboto, sans-serif;
  color: #242d21;
  animation: fadein 0.6s forwards;
  animation-play-state: paused;
}

.features li:nth-child(1) { animation-delay: 0s; }
.features li:nth-child(2) { animation-delay: 0.08s; }
.features li:nth-child(3) { animation-delay: 0.16s; }
.features li:nth-child(4) { animation-delay: 0.24s; }
.features li:nth-child(5) { animation-delay: 0.32s; }
.features li:nth-child(6) { animation-delay: 0.4s; }
.features li:nth-child(7) { animation-delay: 0.48s; }
.features li:nth-child(8) {
  animation-delay: 0.56s;
  border-bottom: none;
}

@media (max-width: 767px) {
  .about-panel {
    padding: 2rem 1.25rem;
  }

  .about-intro,
  .about-heading,
  .features {
    text-align: center;
  }
}
</style>
