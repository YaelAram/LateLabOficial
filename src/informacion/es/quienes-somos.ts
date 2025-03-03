import type { QuienesSomos } from "@interfaces/types";

/*
  Esta constante contiene los parrafos de bienvenida a la pagina del laboratorio y un arreglo con los links
  de contacto.

  Nota: Cada contacto tiene una propiedad llamada "icono" la cual hace referencia a un icono localizado en la
  carpeta /public/*.
*/
export const quienesSomos: QuienesSomos = {
  parrafos: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin leo vel arcu dapibus tincidunt. Sed tempor ornare volutpat. Curabitur eget nibh dolor. Mauris id semper turpis. Curabitur sit amet ante id massa scelerisque consequat. Fusce in nibh nec elit tempor tincidunt. Maecenas lorem dui, mattis ac augue et, molestie imperdiet mi. Sed eu dapibus metus.",
    "Aliquam dui tortor, ullamcorper eu libero et, mattis fringilla magna. Morbi ac nunc et justo scelerisque cursus. Ut ac feugiat mauris, non aliquet ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sit amet urna libero. Fusce ultrices bibendum quam, et ornare nunc vehicula a. Nam consequat dignissim lobortis. Donec eu auctor ante.",
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
