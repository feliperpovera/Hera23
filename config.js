/* ============================================================
   HERA23 — CONFIGURACIÓN COMPARTIDA (landing + fichas)
   Edita aquí una sola vez:
   - whatsappNumber: número con indicativo de país, solo dígitos.
   - airbnbProfile: URL del perfil oficial en Airbnb.
   - heroImage: foto de la portada del landing (opcional).
   - En cada propiedad: airbnbUrl del listado y sus fotos en images[].
   ============================================================ */
window.HERA23 = {
  config: {
    whatsappNumber: '573000000000',            // TODO: reemplazar por el número real
    airbnbProfile: 'https://www.airbnb.com.co/users/show/PERFIL-HERA23',  // TODO: URL real del perfil
    heroImage: ''                              // TODO: p. ej. 'fotos/villa-medellin/01.jpg'
  },
  properties: [
    {
      id: 'casa-grande-medellin',
      nombre: 'Casa grande con vistas increíbles, ping-pong en Medellín',
      corto: { es: 'Casa Grande', en: 'Casa Grande' },
      place: { es: 'Medellín · 1.495 m', en: 'Medellín · 1,495 m' },
      chips: {
        es: ['Vistas increíbles', 'Mesa de ping-pong', 'Ideal para grupos'],
        en: ['Incredible views', 'Ping-pong table', 'Great for groups']
      },
      images: [],            // TODO: ['fotos/casa-grande-medellin/01.jpg', ...]
      airbnbUrl: ''          // TODO: URL del listado (vacío = usa el perfil)
    },
    {
      id: 'villa-santa-fe',
      nombre: 'Villa de lujo + piscina + wifi + barbacoa + bar + TV + personal @Santa Fe',
      corto: { es: 'Villa Santa Fe', en: 'Villa Santa Fe' },
      place: { es: 'Santa Fe de Antioquia · 550 m', en: 'Santa Fe de Antioquia · 550 m' },
      chips: {
        es: ['Piscina', 'WiFi', 'Barbacoa', 'Bar', 'TV', 'Personal de servicio'],
        en: ['Pool', 'WiFi', 'BBQ', 'Bar', 'TV', 'Staff included']
      },
      images: [],
      airbnbUrl: ''
    },
    {
      id: 'villa-medellin',
      nombre: 'Villa de lujo en Medellín · Piscina y vistas a la ciudad',
      corto: { es: 'Villa Medellín', en: 'Villa Medellín' },
      place: { es: 'Medellín · 1.495 m', en: 'Medellín · 1,495 m' },
      chips: {
        es: ['Piscina', 'Vistas a la ciudad', 'Lujo'],
        en: ['Pool', 'City views', 'Luxury']
      },
      images: [],
      airbnbUrl: ''
    }
  ]
};
