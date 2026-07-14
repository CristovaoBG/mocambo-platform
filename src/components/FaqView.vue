<template>
  <section class="faq">
    <div class="container">
      <h2 class="faq__title">Perguntas frequentes</h2>

      <dl class="faq__list">
        <div v-for="(item, index) in items" :key="item.question" class="faq__item">
          <dt class="faq__question" @click="toggle(index)">
            {{ item.question }}
          </dt>
          <dd v-show="openIndex === index" class="faq__answer">
            <template v-if="item.list">
              <p class="faq__answer-text">{{ item.intro }}</p>
              <ul class="faq__answer-list">
                <li v-for="listItem in item.list" :key="listItem">{{ listItem }}</li>
              </ul>
            </template>
            <p v-else class="faq__answer-text">{{ item.text }}</p>
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(null)

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}

function parseAnswer(answer) {
  if (!answer.includes(';')) {
    return { text: answer, intro: null, list: null }
  }

  const parts = answer.split(';').map((s) => s.trim()).filter(Boolean)
  if (parts.length < 2) {
    return { text: answer, intro: null, list: null }
  }

  let intro = parts[0]
  let list = parts.slice(1)

  const colonMatch = intro.match(/^(.+?:)\s*(.+)$/)
  if (colonMatch) {
    intro = colonMatch[1]
    list = [colonMatch[2], ...list]
  }

  return { text: null, intro, list }
}

const items = [
  {
    question: 'Onde fica o Mocambo?',
    answer: 'Temos uma localização excelente! O Mocambo fica a 2 km da saída do Lago Norte, sentido Saída Norte do Plano Piloto, pertinho do Balão do Torto. Confira no mapa abaixo',
  },
  {
    question: 'O acesso é fácil?',
    answer: 'O acesso é fácil e direto, e o Mocambo fica a 100 metros da pista.',
  },
  {
    question: 'Vocês indicam fornecedores?',
    answer: 'Oferecemos contatos de todos os serviços, como: cerimonial, buffet, decoração, DJ, vigilância etc.',
  },
  {
    question: 'Posso contratar meus próprios fornecedores?',
    answer: 'Você pode escolher e trazer seus fornecedores, se preferir!',
  },
  {
    question: 'O que o espaço oferece?',
    answer: 'Oferecemos: salão com capacidade para 200 lugares; boate com balcão para barman; palco para música ao vivo; espaço para DJ; cozinha espaçosa; fogão industrial (6 bocas e forno); freezer; geladeira; banheiros com papéis e sabonete líquido; jardim em toda a extensão do salão; amplo estacionamento; ótima localização; fácil acesso.',
  },
  {
    question: 'Quais itens opcionais vocês oferecem?',
    answer: 'Oferecemos os seguintes itens opcionais para contratação: mesas e cadeiras para até 200 lugares; pista de dança; iluminação para a boate; varal de lâmpadas.',
  },
  {
    question: 'Como funciona o horário do espaço?',
    answer: 'Entregamos o espaço limpo e organizado no horário combinado para a preparação da festa, e recebemos na hora em que acabar, não limitamos o horário.',
  },
  {
    question: 'Como é feita a reserva?',
    answer: 'A reserva é feita depois que o cliente sinalizar, através de contrato.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer: 'Acertamos 30% do valor na assinatura do contrato, quando fazemos a reserva da data, e o restante, na semana do evento.',
  },
  {
    question: 'Como agendo uma visita?',
    answer: 'Agendamos a visita por WhatsApp.',
  },
  {
    question: 'Como faço um orçamento?',
    answer: 'Para fazermos o seu orçamento, por favor, informe: data do evento; o que pretende comemorar; número de convidados via WhatsApp.',
  },
].map((item) => ({
  question: item.question,
  ...parseAnswer(item.answer),
}))
</script>

<style scoped>
.faq {
  background: var(--branco);
  padding: clamp(3rem, 8vw, 5.5rem) 0;
}

.faq__title {
  margin-bottom: 2rem;
}

.faq__list {
  max-width: 720px;
  margin: 0 auto;
}

.faq__item {
  border-bottom: 1px solid rgba(36, 45, 33, 0.15);
  padding: 0.75rem 0;
}

.faq__item:last-child {
  border-bottom: none;
}

.faq__question {
  font-family: 'adobe-caslon-pro', serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--verde);
  margin: 0;
  cursor: pointer;
}

.faq__answer {
  margin: 0.85rem 0 0.35rem;
  padding: 0.15rem 0 0.15rem 1rem;
  border-left: 2px solid rgba(72, 85, 68, 0.35);
}
 
.faq__answer-text,
.faq__answer-list li {
  font-family: 'roboto', sans-serif;
  font-size: 0.9375rem;
  line-height: 1.55;
  color: rgba(40, 44, 39, 0.72);
}

.faq__answer-text {
  text-align: left;
  margin: 0;
}

.faq__answer-list {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0;
}

.faq__answer-list li {
  padding: 0.25rem 0 0.25rem 1rem;
  position: relative;
}

.faq__answer-list li::before {
  content: '–';
  position: absolute;
  left: 0;
  color: var(--verde);
  opacity: 0.5;
}
</style>
