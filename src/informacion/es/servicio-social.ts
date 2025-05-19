import type { ServicioSocial } from "@interfaces/types";

/*
  Esta constante contiene un arreglo con todas las ofertas de servicio social disponibles para trabajar dentro
  del laboratorio.

  Nota: El atributo "url" debe apuntar a la pagina con la informacion detallada de la oferta publicada en la plataforma
  oficial de la UNAM (SIASSYPP).
*/
export const servicioSocial: ServicioSocial[] = [
  {
    nombre: "Machine learning para procesamiento de lenguaje natural",
    clave: "SS-2025-12/181-1587",
    eje_tematico: "Ciencia, Tecnología e Innovación",
    responsable: {
      cargo: "Investigadora Titular A de TC",
      nombre: "Helena Montserrat Gómez Adorno",
      email: "helena.gomez@iimas.unam.mx",
    },
    url: "https://siassypp.unam.mx/consulta/166533",
  },
  {
    nombre: "Desarrollo de aplicaciones web para procesamiento de lenguage natural",
    clave: "SS-2025-12/181-1594",
    eje_tematico: "Ciencia, Tecnología e Innovación",
    responsable: {
      cargo: "Investigadora Titular A de TC",
      nombre: "Helena Montserrat Gómez Adorno",
      email: "helena.gomez@iimas.unam.mx",
    },
    url: "https://siassypp.unam.mx/consulta/167121",
  },
];