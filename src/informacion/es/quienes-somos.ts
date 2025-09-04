import type { QuienesSomos } from "@interfaces/types";

/*
  Esta constante contiene los parrafos de bienvenida a la pagina del laboratorio y un arreglo con los links
  de contacto.

  Nota: Cada contacto tiene una propiedad llamada "icono" la cual hace referencia a un icono localizado en la
  carpeta /public/*.
*/
export const quienesSomos: QuienesSomos = {
  parrafos: [
    "LATE Lab tiene como misión desarrollar investigación interdisciplinaria y de alto impacto en procesamiento de lenguaje natural (PLN), orientada al análisis computacional del lenguaje en contextos sociales, mediáticos, clínicos y culturales. El laboratorio impulsa la creación de herramientas, recursos lingüísticos y marcos computacionales permitan explorar cómo se estructura, transmite y transforma el lenguaje en escenarios reales."
  ],
  contactos: [
    {
      icono: "/gmail.svg",
      descripcion: "Envianos un correo a john@gmail.com",
      tipo: "correo",
      contacto: "john@gmail.com"
    },
    {
      icono: "/outlook.svg",
      descripcion: "Envianos un correo a john@outlook.com",
      tipo: "correo",
      contacto: "john@outlook.com"
    },
    {
      icono: "/github.svg",
      descripcion: "Visita nuestro repositorio de GitHub",
      tipo: "url",
      contacto: "https://github.com/PLN-disca-iimas"
    },
  ]
}
