import type { Proyecto } from "@interfaces/types";

/*
  Esta contantes contiene un arreglo con todos los proyectos desarrollados por el laboratorio. Para mas informacion sobre
  el tipo de dato Proyecto y sus propiedades ir al archivo /src/interfaces/types.d.ts.

  Nota: El componente encargado de mostrar los proyectos ordena automaticamente los proyectos segun el año en el que
  fueron desarrollados (descendente) por lo que no es necesario realizar esa tarea manualmente en este archivo.

  Nota: Se sugiere escribir el nombre de los colaboradores incluyendo unicamente el primer nombre y apellido.

  Nota: Cada recurso tiene una propiedad llamada "icono" esta hace referencia a un icono localizado en la carpeta /public/.
*/
export const proyectos: Proyecto[] = [
  {
    colaboladores: ["John Doe 1", "John Doe 2", "John Doe 3", "John Doe 4", "John Doe 5", "John Doe 6", "John Doe 7", "John Doe 8", "John Doe 9", "John Doe 10", "John Doe 11", "John Doe 12"],
    descripcion: "Lorem ipsum odor amet, consectetuer adipiscing elit. Rutrum nostra pharetra condimentum ridiculus penatibus scelerisque quis.",
    nombre: "Lorem ipsum odor amet, consectetuer adipiscing elit",
    periodo: 2015,
    recursos: [
      { icono: "/pdf.svg", descripcion: "Ir al repositorio del proyecto", nombre: "Publicación", recurso: "/" },
      { icono: "/github.svg", descripcion: "Ir al repositorio del proyecto", nombre: "GitHub (Servidor)", recurso: "/" },
      { icono: "/api.svg", descripcion: "Ir al repositorio del proyecto", nombre: "Servidor", recurso: "/" },
      { icono: "/github.svg", descripcion: "Ir al repositorio del proyecto", nombre: "GitHub (Web)", recurso: "/" },
    ],
  },
  {
    colaboladores: ["John Doe 1", "John Doe 2", "John Doe 3", "John Doe 4", "John Doe 5", "John Doe 6", "John Doe 7", "John Doe 8", "John Doe 9", "John Doe 10", "John Doe 11", "John Doe 12"],
    descripcion: "Lorem ipsum odor amet, consectetuer adipiscing elit. Rutrum nostra pharetra condimentum ridiculus penatibus scelerisque quis.",
    nombre: "Lorem ipsum odor amet, consectetuer adipiscing elit",
    periodo: 2015,
    recursos: [
      { icono: "/github.svg", descripcion: "Ir al repositorio del proyecto", nombre: "GitHub (Servidor)", recurso: "/" },
      { icono: "/api.svg", descripcion: "Ir al repositorio del proyecto", nombre: "Servidor", recurso: "/" },
      { icono: "/github.svg", descripcion: "Ir al repositorio del proyecto", nombre: "GitHub (Web)", recurso: "/" },
      { icono: "/browser.svg", descripcion: "Ir al repositorio del proyecto", nombre: "Web", recurso: "/" },
    ],
  },
  {
    colaboladores: ["John Doe 1", "John Doe 2", "John Doe 3", "John Doe 4", "John Doe 5", "John Doe 6", "John Doe 7", "John Doe 8", "John Doe 9", "John Doe 10", "John Doe 11", "John Doe 12"],
    descripcion: "Lorem ipsum odor amet, consectetuer adipiscing elit. Rutrum nostra pharetra condimentum ridiculus penatibus scelerisque quis.",
    nombre: "Lorem ipsum odor amet, consectetuer adipiscing elit",
    periodo: 2024,
    recursos: [
      { icono: "/pdf.svg", descripcion: "Ir al repositorio del proyecto", nombre: "Publicación", recurso: "/" },
      { icono: "/github.svg", descripcion: "Ir al repositorio del proyecto", nombre: "GitHub (Servidor)", recurso: "/" },
      { icono: "/api.svg", descripcion: "Ir al repositorio del proyecto", nombre: "Servidor", recurso: "/" },
      { icono: "/github.svg", descripcion: "Ir al repositorio del proyecto", nombre: "GitHub (Web)", recurso: "/" },
      { icono: "/browser.svg", descripcion: "Ir al repositorio del proyecto", nombre: "Web", recurso: "/" },
    ],
  },
  {
    colaboladores: ["John Doe 1", "John Doe 2", "John Doe 3", "John Doe 4", "John Doe 5", "John Doe 6", "John Doe 7", "John Doe 8", "John Doe 9", "John Doe 10", "John Doe 11", "John Doe 12"],
    descripcion: "Lorem ipsum odor amet, consectetuer adipiscing elit. Rutrum nostra pharetra condimentum ridiculus penatibus scelerisque quis.",
    nombre: "Lorem ipsum odor amet, consectetuer adipiscing elit",
    periodo: 2024,
    recursos: [
      { icono: "/pdf.svg", descripcion: "Ir al repositorio del proyecto", nombre: "Publicación", recurso: "/" },
      { icono: "/github.svg", descripcion: "Ir al repositorio del proyecto", nombre: "GitHub (Servidor)", recurso: "/" },
      { icono: "/api.svg", descripcion: "Ir al repositorio del proyecto", nombre: "Servidor", recurso: "/" },
      { icono: "/github.svg", descripcion: "Ir al repositorio del proyecto", nombre: "GitHub (Web)", recurso: "/" },
      { icono: "/browser.svg", descripcion: "Ir al repositorio del proyecto", nombre: "Web", recurso: "/" },
    ],
  },
];
