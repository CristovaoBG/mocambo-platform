const WHATSAPP_NUMBER = '5561998112533'

export const site = {
  phone: {
    tel: '+5561998112533',
    display: '(61) 99811-2533',
  },
  whatsapp: {
    number: WHATSAPP_NUMBER,
    url: `https://wa.me/${WHATSAPP_NUMBER}`,
    messages: {
      visit: 'Boa tarde! Gostaria de agendar uma visita :)',
      reserve: 'Boa tarde! Gostaria de fazer uma reserva :)',
    },
  },
  instagram: {
    url: 'https://www.instagram.com/mocamboespaco',
    handle: '@mocamboespaco',
  },
  address: {
    lines: [
      'SHIN Trecho 1 / Lago Norte, Brasília, DF',
      '71560-100',
      'de frente ao balão do Torto',
    ],
  },
  maps: {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15362.614955327766!2d-47.892157299999994!3d-15.716518699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a39b38bc9f96d%3A0x38afa3187b47b826!2sSal%C3%A3o%20de%20Festa%20I%20Casamento%20I%20Evento%20Corporativo%20I%20Espa%C3%A7o%20Mocambo%20-%20Bras%C3%ADlia-DF!5e0!3m2!1sen!2sbr!4v1712345052714!5m2!1sen!2sbr&language=pt-BR',
    url: 'https://www.google.com/maps/place/Espa%C3%A7o+Mocambo/@-15.7165187,-47.8921573,17z/data=!3m1!4b1!4m6!3m5!1s0x935a39b38bc9f96d:0x38afa3187b47b826!8m2!3d-15.7165187!4d-47.8921573',
  },
  copyright: '©2026 – Mocambo Ltda. – Todos os direitos reservados.',
}

export function whatsappUrl(message) {
  return `${site.whatsapp.url}?text=${encodeURIComponent(message)}`
}
