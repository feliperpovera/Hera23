# Fotos de las propiedades

Copia aquí una carpeta por propiedad con sus fotos (JPG/PNG/WebP):

```
fotos/
  casa-grande-medellin/   → Casa grande con vistas increíbles, ping-pong en Medellín
  villa-santa-fe/         → Villa de lujo + piscina + wifi + barbacoa + bar + TV + personal @Santa Fe
  villa-medellin/         → Villa de lujo en Medellín · Piscina y vistas a la ciudad
```

Luego, en `index.html`, llena el arreglo `images` de cada propiedad dentro de `PROPERTIES`, por ejemplo:

```js
images: ['fotos/villa-santa-fe/01.jpg', 'fotos/villa-santa-fe/02.jpg']
```

Y opcionalmente define la foto del hero:

```js
const HERO_IMAGE = 'fotos/villa-medellin/01.jpg';
```
