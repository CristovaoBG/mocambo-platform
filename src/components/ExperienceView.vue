<template>
  <section class="experience">
    <div class="container">
      <div class="row g-4 g-lg-5">
        <div
          v-for="(block, index) in blocks"
          :key="block.title"
          class="col-md-4"
        >
          <article
            class="experience-card"
            :class="{ 'experience-card--visible': visible[index] }"
            :style="{ transitionDelay: `${index * 0.12}s` }"
            :ref="(el) => setCardRef(el, index)"
          >
            <span class="experience-card__number">{{ String(index + 1).padStart(2, '0') }}</span>
            <h2 class="experience-card__title">{{ block.title }}</h2>
            <p
              v-for="(paragraph, pIndex) in block.paragraphs"
              :key="pIndex"
              class="experience-card__text"
            >
              {{ paragraph }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const blocks = [
  {
    title: 'Equipe & parceiros',
    paragraphs: [
      'Nosso pessoal é treinado para promover um encontro de interesses que satisfaça os clientes ao máximo. Nossos colaboradores, como: Cerimonialistas, Buffets, Decoradores, Djs, etc. são grandes parceiros! Muitos deles trabalham no Mocambo há 20 anos, conferindo qualidade e confiança em todos os níveis.',
    ],
  },
  {
    title: 'Seu evento',
    paragraphs: [
      'Atendemos a casamentos, inclusive com cerimônia no local; aniversários; confraternizações; formaturas, e aquelas comemorações especiais que sabemos que merecem uma linda e inesquecível festa!',
    ],
  },
  {
    title: 'Salão & boate',
    paragraphs: [
      'Oferecemos salão para até 200 pessoas, com a boate em local separado, que promove interação em todos os níveis; tanto do diálogo quanto da dança. A música torna-se só alegria, sem ser empecilho à boa conversa!',
    ],
  },
]

const cardRefs = ref([])
const visible = ref(blocks.map(() => false))
let observer = null

function setCardRef(el, index) {
  if (el) cardRefs.value[index] = el
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const index = cardRefs.value.indexOf(entry.target)
        if (index !== -1) visible.value[index] = true
      })
    },
    { threshold: 0.2, rootMargin: '0px 0px -40px 0px' },
  )

  cardRefs.value.forEach((el) => {
    if (el) observer.observe(el)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.experience {
  background: var(--amarelo);
  padding: clamp(3rem, 8vw, 5.5rem) 0;
}

.experience-card {
  height: 100%;
  padding: 2rem 1.75rem 2.25rem;
  background: var(--branco);
  border-top: 3px solid var(--verde);
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.experience-card--visible {
  opacity: 1;
  transform: translateY(0);
}

.experience-card__number {
  display: block;
  font-family: 'adobe-caslon-pro', serif;
  font-size: 0.875rem;
  letter-spacing: 0.12em;
  color: var(--verde);
  opacity: 0.55;
  margin-bottom: 0.75rem;
}

.experience-card__title {
  font-family: 'adobe-caslon-pro', serif;
  font-size: clamp(1.35rem, 2.5vw, 1.75rem);
  font-weight: 400;
  color: var(--verde);
  text-align: left;
  margin-bottom: 1rem;
  line-height: 1.25;
}

.experience-card__text {
  font-family: 'roboto', sans-serif;
  font-size: 0.9375rem;
  line-height: 1.65;
  color: var(--verde-escuro);
  text-align: left !important;
  margin: 0 0.75rem 1rem;
}

.experience-card__text:last-child {
  margin-bottom: 0;
}

@media (max-width: 767px) {
  .experience-card {
    padding: 1.5rem 1.25rem 1.75rem;
  }

  .experience-card__title,
  .experience-card__number {
    text-align: center;
  }
}
</style>
