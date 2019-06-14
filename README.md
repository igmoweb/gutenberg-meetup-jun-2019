# Meetup Wordpress Madrid Junio 2019

## Instalación

Necesitas node y npm instalados:

- `npm install`
- `npm start` para empezar a escuchar cambios.

El paquete `@wordpress/scripts` se encarga de la configuración de webpack.

## ¿Qué incluye?

- `src/es5/simple-block.js`: Un bloque simple hecho en ES5

- `src/blocks/simple-block`: Un bloque simple hecho en ES6

- `src/blocks/call-to-action`: Un bloque Call To Action con algunos atributos y uso de algunos componentes de Gutenberg.

- `src/blocks/author-latest-posts`: Bloque asíncrono que muestra los últimos posts del autor del post actual. Realiza renderizado desde PHP y utiliza `fetchApi` para traer los últimos posts desde Gutenberg. También hace uso de `withSelect` y estado interno de componentes.

- `src/plugins/paragraphs-count`: Añade un nuevo elemento al menú "Más opciones" de cualquier bloque. Al pulsar sobre él muestra una alerta indicando el número de párrafos que hay en el editor actualmente.

- `src/plugins/post-options-sidebar`: Muestra una sidebar en Gutenberg para cambiar un post meta llamado "subheadline". Hace uso de `withDispatch`.

## Slides

https://es.slideshare.net/IgnacioJosCruzmoreno/gutenberg-sin-miedo-149639457
