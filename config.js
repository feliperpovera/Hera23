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
    airbnbProfile: 'https://www.airbnb.com.co/users/profile/1467237529622528687',
    heroImage: 'fotos/villa-medellin/05.avif'
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
      images: ['fotos/casa-grande-medellin/12.webp', 'fotos/casa-grande-medellin/02.webp', 'fotos/casa-grande-medellin/03.avif', 'fotos/casa-grande-medellin/07.avif', 'fotos/casa-grande-medellin/10.avif', 'fotos/casa-grande-medellin/14.avif', 'fotos/casa-grande-medellin/04.avif', 'fotos/casa-grande-medellin/05.avif', 'fotos/casa-grande-medellin/08.avif', 'fotos/casa-grande-medellin/09.avif', 'fotos/casa-grande-medellin/11.avif', 'fotos/casa-grande-medellin/13.avif', 'fotos/casa-grande-medellin/15.avif', 'fotos/casa-grande-medellin/06.webp', 'fotos/casa-grande-medellin/01.avif'],
      airbnbUrl: 'https://www.airbnb.com.co/rooms/1532953690333502228'          // TODO: URL del listado (vacío = usa el perfil)
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
      images: ['fotos/villa-santa-fe/11.avif', 'fotos/villa-santa-fe/16.avif', 'fotos/villa-santa-fe/04.avif', 'fotos/villa-santa-fe/13.avif', 'fotos/villa-santa-fe/02.avif', 'fotos/villa-santa-fe/12.avif', 'fotos/villa-santa-fe/17.avif', 'fotos/villa-santa-fe/14.avif', 'fotos/villa-santa-fe/10.avif', 'fotos/villa-santa-fe/09.avif', 'fotos/villa-santa-fe/07.avif', 'fotos/villa-santa-fe/08.avif', 'fotos/villa-santa-fe/15.avif', 'fotos/villa-santa-fe/01.avif', 'fotos/villa-santa-fe/05.avif', 'fotos/villa-santa-fe/03.avif', 'fotos/villa-santa-fe/06.avif'],
      airbnbUrl: 'https://www.airbnb.com.co/rooms/15900275'
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
      images: ['fotos/villa-medellin/05.avif', 'fotos/villa-medellin/07.avif', 'fotos/villa-medellin/03.avif', 'fotos/villa-medellin/15.avif', 'fotos/villa-medellin/08.avif', 'fotos/villa-medellin/13.avif', 'fotos/villa-medellin/04.avif', 'fotos/villa-medellin/09.avif', 'fotos/villa-medellin/10.avif', 'fotos/villa-medellin/06.avif', 'fotos/villa-medellin/11.avif', 'fotos/villa-medellin/12.avif', 'fotos/villa-medellin/02.avif', 'fotos/villa-medellin/01.avif', 'fotos/villa-medellin/17.avif', 'fotos/villa-medellin/16.avif', 'fotos/villa-medellin/14.avif'],
      airbnbUrl: 'https://www.airbnb.com.co/rooms/1281079213215674888'
    }
  ]
};
