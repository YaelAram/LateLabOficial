import type { Publicacion } from "@interfaces/types";

/*
  Esta constantes contiene un arreglo con todas las publicaciones realizadas por el laboratorio.

  Nota: El componente encargado de mostrar las publicaciones se encarga de ordenar automaticamente las publicaciones
  segun el año en que fueron publicadas (descendente) por lo que no es necesario realizar esa tarea manualmente en 
  este archivo.

  Nota: Cada autor tiene una propiedad llamada "nombre", se sugiere solo incluir el primer nombre y apellido.
*/
export const publicaciones: Publicacion[] = [
  {
    id: "1",
    titulo: "La Increíble Aventura del Misterio en las Montañas Perdidas",
    autores: [
      { nombre: "Juan Pérez", apa: "Pérez, J.", ieee: "J. Pérez", bibtex: "Pérez, Juan" },
      { nombre: "María López", apa: "López, M.", ieee: "M. López", bibtex: "López, María" },
      { nombre: "Carlos Gómez", apa: "Gómez, C.", ieee: "C. Gómez", bibtex: "Gómez, Carlos" },
      { nombre: "Ana Rodríguez", apa: "Rodríguez, A.", ieee: "A. Rodríguez", bibtex: "Rodríguez, Ana" },
      { nombre: "Luis Fernández", apa: "Fernández, L.", ieee: "L. Fernández", bibtex: "Fernández, Luis" },
      { nombre: "Laura Martínez", apa: "Martínez, L.", ieee: "L. Martínez", bibtex: "Martínez, Laura" },
      { nombre: "José González", apa: "González, J.", ieee: "J. González", bibtex: "González, José" },
      { nombre: "Sofía Hernández", apa: "Hernández, S.", ieee: "S. Hernández", bibtex: "Hernández, Sofía" },
      { nombre: "Diego Sánchez", apa: "Sánchez, D.", ieee: "D. Sánchez", bibtex: "Sánchez, Diego" },
      { nombre: "Paula Ramírez", apa: "Ramírez, P.", ieee: "P. Ramírez", bibtex: "Ramírez, Paula" },
    ],
    pdf: "/",
    periodo: 2015,
    tipo: "Tesis de maestría",
    tematicas: [
      "Topic 1", "Topic 2", "Topic 3", "Topic 4", "Topic 5", "Topic 6", "Topic 7",
      "Topic 8", "Topic 9", "Topic 10", "Topic 11", "Topic 12"
    ],
    institucion: "Instituto de Investigaciones en Matemáticas Aplicadas y Sistemas",
    lugar: "Ciudad de México, México",
    bibtex: {
      tipo: "article",
      data: {
        doi: "123456789asd",
        journal: "Fake Journal",
        number: "5",
        pages: "5--6",
        volume: "28"
      }
    }
  },
  {
    id: "2",
    titulo: "El Último Viaje del Guerrero en Busca de la Verdad",
    autores: [
      { nombre: "Martín Castro", apa: "Castro, M.", ieee: "M. Castro", bibtex: "Castro, Martín" },
      { nombre: "Gabriela Vargas", apa: "Vargas, G.", ieee: "G. Vargas", bibtex: "Vargas, Gabriela" },
      { nombre: "Francisco Torres", apa: "Torres, F.", ieee: "F. Torres", bibtex: "Torres, Francisco" },
      { nombre: "Valeria Ríos", apa: "Ríos, V.", ieee: "V. Ríos", bibtex: "Ríos, Valeria" },
      { nombre: "Santiago Ortiz", apa: "Ortiz, S.", ieee: "S. Ortiz", bibtex: "Ortiz, Santiago" },
      { nombre: "Isabel Morales", apa: "Morales, I.", ieee: "I. Morales", bibtex: "Morales, Isabel" },
      { nombre: "Miguel Peña", apa: "Peña, M.", ieee: "M. Peña", bibtex: "Peña, Miguel" },
      { nombre: "Camila Silva", apa: "Silva, C.", ieee: "C. Silva", bibtex: "Silva, Camila" },
      { nombre: "Andrés Méndez", apa: "Méndez, A.", ieee: "A. Méndez", bibtex: "Méndez, Andrés" },
      { nombre: "Lucía Delgado", apa: "Delgado, L.", ieee: "L. Delgado", bibtex: "Delgado, Lucía" },
    ],
    pdf: "/",
    periodo: 2015,
    tipo: "Tesis doctoral",
    tematicas: [
      "Topic 1", "Topic 2", "Topic 3", "Topic 4", "Topic 5", "Topic 6", "Topic 7",
      "Topic 8", "Topic 9", "Topic 10", "Topic 11", "Topic 12"
    ],
    institucion: "Instituto de Investigaciones en Matemáticas Aplicadas y Sistemas",
    lugar: "Ciudad de México, México",
    bibtex: {
      tipo: "inproceedings",
      data: {
        book: "Fake book",
        pages: "7--9",
      },
    },
  },
  {
    id: "3",
    titulo: "El Secreto Oculto en el Corazón del Bosque Encantado",
    autores: [
      { nombre: "Martín Castro", apa: "Castro, M.", ieee: "M. Castro", bibtex: "Castro, Martín" },
      { nombre: "Gabriela Vargas", apa: "Vargas, G.", ieee: "G. Vargas", bibtex: "Vargas, Gabriela" },
      { nombre: "Francisco Torres", apa: "Torres, F.", ieee: "F. Torres", bibtex: "Torres, Francisco" },
      { nombre: "Valeria Ríos", apa: "Ríos, V.", ieee: "V. Ríos", bibtex: "Ríos, Valeria" },
      { nombre: "Santiago Ortiz", apa: "Ortiz, S.", ieee: "S. Ortiz", bibtex: "Ortiz, Santiago" },
      { nombre: "Isabel Morales", apa: "Morales, I.", ieee: "I. Morales", bibtex: "Morales, Isabel" },
      { nombre: "Miguel Peña", apa: "Peña, M.", ieee: "M. Peña", bibtex: "Peña, Miguel" },
      { nombre: "Camila Silva", apa: "Silva, C.", ieee: "C. Silva", bibtex: "Silva, Camila" },
      { nombre: "Andrés Méndez", apa: "Méndez, A.", ieee: "A. Méndez", bibtex: "Méndez, Andrés" },
      { nombre: "Lucía Delgado", apa: "Delgado, L.", ieee: "L. Delgado", bibtex: "Delgado, Lucía" },
    ],
    pdf: "/",
    periodo: 2024,
    tipo: "Tesis de maestría",
    tematicas: [
      "Topic 1", "Topic 2", "Topic 3", "Topic 4", "Topic 5", "Topic 6", "Topic 7",
      "Topic 8", "Topic 9", "Topic 10", "Topic 11", "Topic 12"
    ],
    institucion: "Instituto de Investigaciones en Matemáticas Aplicadas y Sistemas",
    lugar: "Ciudad de México, México",
    bibtex: {
      tipo: "article",
      data: {
        doi: "123456789asd",
        journal: "The Second Fake Journal",
        number: "7",
        pages: "50--60",
        volume: "30"
      }
    }
  },
  {
    id: "4",
    titulo: "Las Crónicas de una Ciudad Sumergida en la Niebla",
    autores: [
      { nombre: "Emilio Navarro", apa: "Navarro, E.", ieee: "E. Navarro", bibtex: "Navarro, Emilio" },
      { nombre: "Patricia Castillo", apa: "Castillo, P.", ieee: "P. Castillo", bibtex: "Castillo, Patricia" },
      { nombre: "Ricardo Reyes", apa: "Reyes, R.", ieee: "R. Reyes", bibtex: "Reyes, Ricardo" },
      { nombre: "Elena Romero", apa: "Romero, E.", ieee: "E. Romero", bibtex: "Romero, Elena" },
      { nombre: "Fernando Vega", apa: "Vega, F.", ieee: "F. Vega", bibtex: "Vega, Fernando" },
      { nombre: "Alejandra Luna", apa: "Luna, A.", ieee: "A. Luna", bibtex: "Luna, Alejandra" },
      { nombre: "Jorge Rivera", apa: "Rivera, J.", ieee: "J. Rivera", bibtex: "Rivera, Jorge" },
      { nombre: "Natalia Mendoza", apa: "Mendoza, N.", ieee: "N. Mendoza", bibtex: "Mendoza, Natalia" },
      { nombre: "Héctor Campos", apa: "Campos, H.", ieee: "H. Campos", bibtex: "Campos, Héctor" },
      { nombre: "Victoria Espinoza", apa: "Espinoza, V.", ieee: "V. Espinoza", bibtex: "Espinoza, Victoria" },
    ],
    pdf: "/",
    periodo: 2024,
    tipo: "Trabajo de grado",
    tematicas: [
      "Topic 1", "Topic 2", "Topic 3", "Topic 4", "Topic 5", "Topic 6", "Topic 7",
      "Topic 8", "Topic 9", "Topic 10", "Topic 11", "Topic 12"
    ],
    institucion: "Instituto de Investigaciones en Matemáticas Aplicadas y Sistemas",
    lugar: "Ciudad de México, México",
    bibtex: {
      tipo: "inproceedings",
      data: {
        book: "The Second Fake book",
        pages: "70--90",
      },
    }
  },
];
