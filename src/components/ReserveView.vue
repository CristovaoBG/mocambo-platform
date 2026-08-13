<script setup>
import { computed, reactive, ref } from 'vue'
import {
  WHATSAPP_ERROR,
  formatWhatsapp,
  isValidWhatsapp,
  normalizeWhatsapp,
} from '@/utils/whatsapp'

const form = reactive({
  name: '',
  whatsapp: '',
  hasDate: 'sim',
  date: '',
  guests: '',
  eventType: '',
})

const eventTypes = [
  'casamento',
  'festa infantil',
  'festa de debutante',
  'confraternização de empresa',
  'outro',
]

const status = ref('idle')
const errorMessage = ref('')
const whatsappError = ref('')
const dateError = ref('')
const dateInput = ref(null)

const dateLabel = computed(() =>
  form.hasDate === 'sim' ? 'Data' : 'Data aproximada'
)

const minDate = computed(() => {
  const today = new Date()
  const yyyy = today.getFullYear()
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const dd = String(today.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
})

const canSubmit = computed(() => status.value !== 'loading')

function isDateInPast(value) {
  if (!value) return false
  return value < minDate.value
}

function checkDate() {
  const el = dateInput.value
  if (!form.date) {
    dateError.value = ''
    el?.setCustomValidity('')
    return false
  }
  if (isDateInPast(form.date)) {
    dateError.value = 'Essa data já passou'
    el?.setCustomValidity('Essa data já passou')
    return false
  }
  dateError.value = ''
  el?.setCustomValidity('')
  return true
}

function checkWhatsapp() {
  const value = form.whatsapp.trim()
  if (!value) {
    whatsappError.value = ''
    return false
  }
  if (!isValidWhatsapp(value)) {
    whatsappError.value = WHATSAPP_ERROR
    return false
  }
  form.whatsapp = formatWhatsapp(value)
  whatsappError.value = ''
  return true
}

async function onSubmit() {
  if (!canSubmit.value) return

  if (!form.name.trim()) {
    status.value = 'error'
    errorMessage.value = 'Informe o nome.'
    return
  }

  if (!checkWhatsapp()) {
    status.value = 'error'
    errorMessage.value = whatsappError.value || WHATSAPP_ERROR
    return
  }

  if (!checkDate()) {
    dateInput.value?.reportValidity()
    return
  }

  if (!form.guests || Number(form.guests) < 1) {
    status.value = 'error'
    errorMessage.value = 'Informe a quantidade de convidados.'
    return
  }

  if (!form.eventType) {
    status.value = 'error'
    errorMessage.value = 'Escolha o tipo de evento.'
    return
  }

  status.value = 'loading'
  errorMessage.value = ''

  const payload = {
    name: form.name.trim(),
    whatsapp: normalizeWhatsapp(form.whatsapp),
    hasDate: form.hasDate === 'sim',
    date: form.date,
    guests: Number(form.guests),
    eventType: form.eventType,
  }

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const data = await response.json().catch(() => ({}))

    if (!response.ok) {
      throw new Error(data.error || 'Não foi possível enviar. Tente novamente.')
    }

    status.value = 'success'
    form.name = ''
    form.whatsapp = ''
    form.hasDate = 'sim'
    form.date = ''
    form.guests = ''
    form.eventType = ''
    whatsappError.value = ''
    dateError.value = ''
    dateInput.value?.setCustomValidity('')
  } catch (error) {
    status.value = 'error'
    errorMessage.value = error.message || 'Não foi possível enviar. Tente novamente.'
  }
}
</script>

<template>
  <section class="reserve">
    <div class="reserve__inner">
      <h2 class="reserve__title">Reserve agora, e venha celebrar!</h2>

      <form class="reserve__form" @submit.prevent="onSubmit">
        <label class="field">
          <span class="field__label">Seu nome</span>
          <input
            v-model="form.name"
            class="field__input"
            type="text"
            name="name"
            autocomplete="name"
            required
          >
        </label>

        <label class="field">
          <span class="field__label">WhatsApp</span>
          <input
            v-model="form.whatsapp"
            class="field__input"
            :class="{ 'field__input--invalid': whatsappError }"
            type="tel"
            name="whatsapp"
            autocomplete="tel"
            inputmode="tel"
            placeholder="(61) 99811-2533"
            required
            @blur="checkWhatsapp"
            @input="whatsappError && checkWhatsapp()"
          >
          <span v-if="whatsappError" class="field__error">{{ whatsappError }}</span>
        </label>

        <fieldset class="field field--choice">
          <legend class="field__label">Tem data definida?</legend>
          <div class="field__options">
            <label class="option">
              <input v-model="form.hasDate" type="radio" name="hasDate" value="sim" required>
              <span>Sim</span>
            </label>
            <label class="option">
              <input v-model="form.hasDate" type="radio" name="hasDate" value="nao">
              <span>Não</span>
            </label>
          </div>
        </fieldset>

        <label class="field">
          <span class="field__label">{{ dateLabel }}</span>
          <input
            ref="dateInput"
            v-model="form.date"
            class="field__input"
            :class="{ 'field__input--invalid': dateError }"
            type="date"
            name="date"
            :min="minDate"
            required
            @change="checkDate"
            @input="checkDate"
            @invalid="checkDate"
          >
          <span v-if="dateError" class="field__error">{{ dateError }}</span>
        </label>

        <label class="field">
          <span class="field__label">Quantidade de convidados</span>
          <input
            v-model="form.guests"
            class="field__input"
            type="number"
            name="guests"
            min="1"
            step="1"
            required
          >
        </label>

        <label class="field">
          <span class="field__label">Tipo de evento</span>
          <select v-model="form.eventType" class="field__input field__select" name="eventType" required>
            <option disabled value="">Selecione</option>
            <option v-for="type in eventTypes" :key="type" :value="type">
              {{ type }}
            </option>
          </select>
        </label>

        <p v-if="status === 'success'" class="reserve__feedback reserve__feedback--ok">
          Recebemos seu pedido. Em breve entraremos em contato!
        </p>
        <p v-else-if="status === 'error'" class="reserve__feedback reserve__feedback--error">
          {{ errorMessage }}
        </p>

        <button class="btn btn-primary reserve__submit" type="submit" :disabled="!canSubmit">
          {{ status === 'loading' ? 'Enviando…' : 'Enviar' }}
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.reserve {
  background: var(--branco);
  padding: clamp(3rem, 8vw, 5rem) 1.25rem;
}

.reserve__inner {
  max-width: 520px;
  margin: 0 auto;
}

.reserve__title {
  max-width: 404px;
  width: 100%;
  margin: 0 auto 2.5rem;
}

.reserve__form {
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin: 0;
  padding: 0;
  border: 0;
}

.field__label {
  font-family: 'roboto', sans-serif;
  font-size: 0.95rem;
  color: var(--verde);
  text-align: left;
}

.field__input {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(72, 85, 68, 0.35);
  border-radius: 8px;
  background: #fff;
  color: var(--verde-escuro);
  font-family: 'roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.4;
  padding: 0.7rem 0.85rem;
}

.field__input:focus {
  outline: 2px solid rgba(72, 85, 68, 0.35);
  outline-offset: 1px;
}

.field__input--invalid {
  border-color: #8a2f2f;
}

.field__error {
  font-family: 'roboto', sans-serif;
  font-size: 0.85rem;
  color: #8a2f2f;
  text-align: left;
}

.field__select {
  appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, var(--verde) 50%),
    linear-gradient(135deg, var(--verde) 50%, transparent 50%);
  background-position: calc(100% - 18px) 55%, calc(100% - 12px) 55%;
  background-size: 6px 6px, 6px 6px;
  background-repeat: no-repeat;
  padding-right: 2.25rem;
}

.field__options {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
}

.option {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-family: 'roboto', sans-serif;
  font-size: 1rem;
  color: var(--verde);
  cursor: pointer;
}

.option input {
  accent-color: var(--verde);
}

.reserve__submit {
  align-self: center;
  margin-top: 0.75rem;
  font-size: 1.75rem !important;
  padding: 12px 34px 6px !important;
}

.reserve__submit:disabled {
  opacity: 0.7;
  cursor: wait;
}

.reserve__feedback {
  margin: 0;
  font-family: 'roboto', sans-serif;
  font-size: 0.95rem;
  text-align: left;
}

.reserve__feedback--ok {
  color: var(--verde);
}

.reserve__feedback--error {
  color: #8a2f2f;
}

@media (max-width: 767px) {
  .reserve__submit {
    font-size: 1.5rem !important;
  }
}
</style>
