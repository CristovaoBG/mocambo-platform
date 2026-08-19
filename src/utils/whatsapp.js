const WHATSAPP_ERROR =
  'Informe um WhatsApp válido com DDD (ex.: 61 98765-4321).'

function digitsOnly(value) {
  return String(value || '').replace(/\D/g, '')
}

/** Normaliza para E.164 BR sem +: 55 + DDD + 9 dígitos. */
function normalizeWhatsapp(value) {
  let digits = digitsOnly(value)

  if (digits.startsWith('55') && digits.length > 11) {
    digits = digits.slice(0, 13)
  } else if (digits.length === 10 || digits.length === 11) {
    digits = `55${digits}`
  }

  return digits
}

/**
 * Aceita celular BR com ou sem +55 / máscara.
 * Formato local: DDD (2) + 9 + 8 dígitos.
 */
function isValidWhatsapp(value) {
  const digits = digitsOnly(value)
  if (!digits) return false

  const local =
    digits.startsWith('55') && digits.length >= 12 ? digits.slice(2) : digits

  return /^[1-9]\d9\d{8}$/.test(local)
}

/** Formata para exibição: (61) 99811-2533 */
function formatWhatsapp(value) {
  if (!isValidWhatsapp(value)) return String(value || '').trim()

  const digits = digitsOnly(value)
  const local =
    digits.startsWith('55') && digits.length >= 12 ? digits.slice(2) : digits

  return `(${local.slice(0, 2)}) ${local.slice(2, 7)}-${local.slice(7)}`
}

module.exports = {
  WHATSAPP_ERROR,
  digitsOnly,
  normalizeWhatsapp,
  isValidWhatsapp,
  formatWhatsapp,
}
