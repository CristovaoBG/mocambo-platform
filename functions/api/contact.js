import {
  corsHeaders,
  handleContactPost,
  jsonResponse,
} from '../_lib/contact.cjs'

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders })
}

export async function onRequestPost(context) {
  return handleContactPost(context.request, context.env)
}

export async function onRequest() {
  return jsonResponse(405, { error: 'Método não permitido.' })
}
