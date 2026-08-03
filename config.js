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
      rating: '5,0',
      reviewsCount: 27,
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
      rating: '4,89',
      reviewsCount: 63,
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
      id: 'finca-campestre',
      nombre: 'Finca campestre con piscina cerca a Medellín',
      corto: { es: 'Finca Campestre', en: 'Finca Campestre' },
      place: { es: 'Venecia, Antioquia · 1.350 m', en: 'Venecia, Antioquia · 1,350 m' },
      chips: {
        es: ['Piscina', 'Zonas verdes', 'Ideal para familias'],
        en: ['Pool', 'Green areas', 'Great for families']
      },
      images: ['fotos/finca-campestre/06.avif', 'fotos/finca-campestre/01.avif', 'fotos/finca-campestre/04.avif', 'fotos/finca-campestre/02.avif', 'fotos/finca-campestre/07.avif', 'fotos/finca-campestre/03.avif', 'fotos/finca-campestre/05.avif'],
      airbnbUrl: 'https://www.airbnb.com.co/rooms/1555468883631122623'
    },
    {
      id: 'villa-medellin',
      rating: '4,9',
      reviewsCount: 78,
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
  ],
  reviews: [
    {
      name: 'Jose', img: 'assets/resenas/jose.jpg', ini: 'J',
      sub: { es: 'Armenia, Colombia', en: 'Armenia, Colombia' },
      meta: { es: ['junio de 2026', 'En grupo'], en: ['June 2026', 'Group trip'] },
      text: {
        es: 'Felipe nos hice un trabajo fuera de este mundo, no hay palabras para explicar tan humilde tan responsible tan amable nos ayudar atender un dia de 60+ personas con comida…',
        en: 'Felipe did an out-of-this-world job for us, there are no words to describe how humble, responsible and kind he was, helping us host a day of 60+ people with food…'
      }
    },
    {
      name: 'Rafael', img: 'assets/resenas/rafael.jpg', ini: 'R',
      sub: { es: '4 años en Airbnb', en: '4 years on Airbnb' },
      meta: { es: ['Hace 1 semana', 'Con mascota'], en: ['1 week ago', 'With pet'] },
      text: {
        es: 'Lugar hermoso y espacioso tiene de todo para hacer, vistas increíbles habitaciones cómodas volvería a alojarme 10/10',
        en: 'Beautiful and spacious place, it has everything to do, incredible views, comfortable rooms, I would stay again 10/10'
      }
    },
    {
      name: 'Nelson', img: 'assets/resenas/nelson.jpg', ini: 'N',
      sub: { es: 'Maracay, Venezuela', en: 'Maracay, Venezuela' },
      meta: { es: ['agosto de 2025', 'En grupo'], en: ['August 2025', 'Group trip'] },
      text: {
        es: 'En verdad que la pasamos genial en la casa, Felipe fue un excelente host y la sra Esther una excelente cocinera. La casa está ubicada algo retirada pero vale la pena al 100%…',
        en: 'We truly had a great time at the house, Felipe was an excellent host and Mrs. Esther an excellent cook. The house is a bit remote but it is 100% worth it…'
      }
    },
    {
      name: 'Maria Alejandra', img: 'assets/resenas/maria-alejandra.jpg', ini: 'M',
      sub: { es: 'Medellín, Colombia', en: 'Medellín, Colombia' },
      meta: { es: ['marzo de 2026', 'En grupo'], en: ['March 2026', 'Group trip'] },
      text: {
        es: 'Fue una excelente estadía, demasiado cómoda y tal cual como en las fotos mis amigos y familiares la pasamos increíble!',
        en: 'It was an excellent stay, extremely comfortable and exactly like the photos, my friends and family had an incredible time!'
      }
    },
    {
      name: 'Soledad', img: 'assets/resenas/soledad.jpg', ini: 'S',
      sub: { es: '6 años en Airbnb', en: '6 years on Airbnb' },
      meta: { es: ['enero de 2026', 'Con niños'], en: ['January 2026', 'With kids'] },
      text: {
        es: 'Muy linda casa, y muy grande. Se encuentra en una zona muy tranquila, hermosa vista de Medellín, un paisaje muy lindo. Entran cómodas muchas personas. Está equipada para la…',
        en: 'Very pretty house, and very big. It is in a very quiet area, beautiful view of Medellín, a lovely landscape. It comfortably fits many people. It is equipped for the…'
      }
    },
    {
      name: 'Francisco', img: 'assets/resenas/francisco.jpg', ini: 'F',
      sub: { es: 'Ciudad de México, México', en: 'Mexico City, Mexico' },
      meta: { es: ['octubre de 2025', 'En grupo'], en: ['October 2025', 'Group trip'] },
      text: {
        es: 'La casa esta enorme, tiene una excelente vista y esta a 18 min de Provenza. La atención de Felipe es excelente, siempre estuvo al pendiente de nostros aunque no estuvieramos en l…',
        en: 'The house is huge, it has an excellent view and is 18 min from Provenza. Felipe\'s attention is excellent, he was always looking out for us even when we were not at t…'
      }
    }
  ]
};
