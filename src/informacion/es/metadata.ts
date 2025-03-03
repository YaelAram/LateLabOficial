import type { Metadata } from "@interfaces/types";

/*
  Este objeto contiene los valores para los metatags de la pagina index. 

  Nota: Los metatags son etiquetas especiales en HTML que dan informacion a los buscadores y los ayuda a indexar 
  mejor nuestra pagina.
*/
export const indexMetadata: Metadata = {
  title: 'LateLab',
  description: 'Página principal del Laboratorio de Lenguaje y Análisis de Textos',
  keywords: ['Late Lab', 'IIMAS', 'UNAM', 'Análisis de Textos', 'Laboratorio'],
  image: '/logo.png',
  language: 'es'
};
