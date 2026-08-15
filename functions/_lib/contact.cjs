const EVENT_TYPES = [
  'casamento',
  'festa infantil',
  'festa de debutante',
  'confraternização de empresa',
  'outro',
]

const WHATSAPP_ERROR =
  'Informe um WhatsApp válido com DDD (ex.: 61 99811-2533).'

function digitsOnly(value) {
  return String(value || '').replace(/\D/g, '')
}

function normalizeWhatsapp(value) {
  let digits = digitsOnly(value)

  if (digits.startsWith('55') && digits.length > 11) {
    digits = digits.slice(0, 13)
  } else if (digits.length === 10 || digits.length === 11) {
    digits = `55${digits}`
  }

  return digits
}

function isValidWhatsapp(value) {
  const digits = digitsOnly(value)
  if (!digits) return false

  const local =
    digits.startsWith('55') && digits.length >= 12 ? digits.slice(2) : digits

  return /^[1-9]\d9\d{8}$/.test(local)
}

function todayIsoLocal() {
  const today = new Date()
  const yyyy = today.getFullYear()
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const dd = String(today.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

function validateContact(data) {
  const errors = []
  const name = String(data.name || '').trim()
  const whatsapp = String(data.whatsapp || '').trim()
  const hasDate = data.hasDate === true || data.hasDate === 'sim'
  const date = String(data.date || '').trim()
  const guests = Number(data.guests)
  const eventType = String(data.eventType || '').trim()

  if (!name) errors.push('Informe o nome.')
  if (!whatsapp) {
    errors.push('Informe o WhatsApp.')
  } else if (!isValidWhatsapp(whatsapp)) {
    errors.push(WHATSAPP_ERROR)
  }

  if (!date) {
    errors.push('Informe a data.')
  } else if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || date < todayIsoLocal()) {
    errors.push('Essa data já passou')
  }

  if (!Number.isInteger(guests) || guests < 1) {
    errors.push('Informe a quantidade de convidados.')
  }
  if (!EVENT_TYPES.includes(eventType)) {
    errors.push('Escolha o tipo de evento.')
  }

  return {
    errors,
    payload: {
      name,
      whatsapp: isValidWhatsapp(whatsapp) ? normalizeWhatsapp(whatsapp) : whatsapp,
      hasDate,
      date,
      guests,
      eventType,
    },
  }
}

async function sendContactEmail(env, payload) {
  const apiKey = env.RESEND_API_KEY
  const toEmail = env.EMAIL
  const fromEmail = env.RESEND_FROM
  const businessWhatsapp = env.WHATSAPP || ''

  if (!apiKey || !toEmail || !fromEmail) {
    const err = new Error(
      'Servidor sem EMAIL, RESEND_FROM ou RESEND_API_KEY configurados.'
    )
    err.status = 500
    throw err
  }

  const emailBody = JSON.stringify(
    {
      source: 'espaco-mocambo-reserva',
      ...payload,
      ...(businessWhatsapp ? { businessWhatsapp } : {}),
    },
    null,
    2
  )

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `Espaço Mocambo <${fromEmail}>`,
      to: [toEmail],
      subject: `Reserva — ${payload.name} (${payload.eventType})`,
      text: emailBody,
    }),
  })

  const result = await response.json().catch(() => ({}))
  if (!response.ok) {
    const err = new Error(result.message || 'Falha ao enviar e-mail.')
    err.status = 502
    throw err
  }

  return result
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

function jsonResponse(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders,
    },
  })
}

async function handleContactPost(request, env) {
  let body
  try {
    body = await request.json()
  } catch {
    return jsonResponse(400, { error: 'JSON inválido.' })
  }

  const { errors, payload } = validateContact(body)
  if (errors.length) {
    return jsonResponse(400, { error: errors[0], errors })
  }

  try {
    await sendContactEmail(env, payload)
    return jsonResponse(200, { ok: true })
  } catch (error) {
    return jsonResponse(error.status || 500, {
      error: error.message || 'Erro interno.',
    })
  }
}

/** Adapter para o middleware do vue-cli (Express-like). */
async function handleContactNode(req, res, env) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.statusCode = 204
    res.end()
    return
  }

  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Método não permitido.' }))
    return
  }

  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  const raw = Buffer.concat(chunks).toString('utf8')

  const request = new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: raw || '{}',
  })

  const response = await handleContactPost(request, env)
  const text = await response.text()
  res.statusCode = response.status
  res.setHeader('Content-Type', 'application/json')
  res.end(text)
}

module.exports = {
  corsHeaders,
  handleContactNode,
  handleContactPost,
  jsonResponse,
  sendContactEmail,
  validateContact,
}
