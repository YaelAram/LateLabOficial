# Carpeta Información

Esta carpeta contiene la información de la aplicación clasificada por idioma mostrada por la pagina principal. Gracias a
esta estructura podemos agregar soporte a nuevos idiomas creando la respectiva carpeta del idioma y recreando los archivos
de información dentro de ella con la información traducida al nuevo idioma.

## Agregar soporte de internacionalización al proyecto

En caso de que aun no se haya agregado el soporte a i18n en Astro se debe seguir los siguientes pasos:

1. En el archivo /astro.config.mjs debemos agregar la siguiente configuración:

```javascript
import { defineConfig } from "astro/config";

export default defineConfig({
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },
});
```

> [!INFO]
> La propiedad "locales" es un arreglo que debe contener todos los idiomas soportados por la aplicación en formato ISO.

2. Crear links con soporte de idioma. Ejemplo:

```javascript
---
import { getRelativeLocaleUrl } from 'astro:i18n';

// defaultLocale is "es"
const aboutURL = getRelativeLocaleUrl("es", "about");
---

<a href="/get-started/">¡Vamos!</a>
<a href={getRelativeLocaleUrl('es', 'blog')}>Blog</a>
<a href={aboutURL}>Acerca</a>
```

## Agregar un nuevo idioma

Para este ejemplo agregaremos el soporte al idioma Inglés:

1. Creamos la carpeta "en" dentro del directorio /src/informacion.
2. Copiamos los archivos de la carpeta /src/informacion/es y los pegamos dentro de la carpeta /src/informacion/en.
3. Traducimos al Inglés la información contenida por los archivos dentro del directorio "en".
4. Dentro del directorio /src/pages creamos un nuevo directorio llamada "en".
5. Copiamos el archivo /src/pages/index.astro y lo pegamos dentro de la carpeta que acabamos de crear.
6. Actualizamos la importación del objeto con la información de la pagina:

```javascript
// Cambiamos la ruta de "@informacion/es/paginaIndex" a "@informacion/en/paginaIndex"
import { paginaIndex } from "@informacion/en/paginaIndex";
```
