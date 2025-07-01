import type { Miembro } from '@interfaces/types';

/*
  Esta constante contiene un arreglo con todos los miembros del laboratorio. Para mas informacion sobre
  el tipo de dato Proyecto y sus propiedades ir al archivo /src/interfaces/types.d.ts.

  Nota: El componente encargado de mostrar a los miembros del laboratorio clasifica automaticamente los usuario segun 
  su estatus (academico, alumno o exalumno) por lo que no es necesario realizar esa tarea manualmente en este archivo.

  Nota: Se sugiere escribir el nombre del miembro incluyendo solo el primer nombre y apellido.
  
  Nota: En la propiedad formatoISO se debe escribir la fecha en formato ISO 8601, por ejemplo, "2024-07-28".
  
  Nota: En la propiedad formatoHumano se debe escribir la fecha en un formato facil de leer, se recomienda solo 
  incluir el mes y año, por ejemplo, "Julio 2024".
*/
export const miembros: Miembro[] = [
  {
    nombre: "Helena Adorno",
    estatus: "academico",
    puesto: "Investigadora Titula A",
    periodo: {
      inicio: {
        formatoISO: "2020-01-01",
        formatoHumano: "Enero, 2020"
      },
      fin: {
        formatoISO: "2025-07-01",
        formatoHumano: "Actualidad"
      }
    }
  },
  {
    nombre: "Ethan Sanchez",
    estatus: "alumno",
    puesto: "Estudiante",
    periodo: {
      inicio: {
        formatoISO: "2025-01-13",
        formatoHumano: "Enero, 2025"
      },
      fin: {
        formatoISO: "2025-07-01",
        formatoHumano: "Actualidad"
      }
    }
  },
  {
    nombre: "Arturo Barzalobre Geronimo",
    estatus: "exalumno",
    puesto: "Servicio social",
    periodo: {
      inicio: {
        formatoISO: "2022-08-20",
        formatoHumano: "Agosto, 2022"
      },
      fin: {
        formatoISO: "2023-03-01",
        formatoHumano: "2023-03-01"
      }
    }
  },
  {
    nombre: "Andric Valdez",
    estatus: "alumno",
    puesto: "Estudiante Doctorado",
    periodo: {
      inicio: {
        formatoISO: "2022-08-08",
        formatoHumano: "Agosto, 2022"
      },
      fin: {
        formatoISO: "2025-07-01",
        formatoHumano: "Actualidad"
      }
    }
  },
  {
    nombre: "Jorge Téllez",
    estatus: "alumno",
    puesto: "Alumno",
    periodo: {
      inicio: {
        formatoISO: "2025-03-13",
        formatoHumano: "Marzo, 2025"
      },
      fin: {
        formatoISO: "2025-07-01",
        formatoHumano: "Actualidad"
      }
    }
  },
  {
    nombre: "Israel Islas Barajas",
    estatus: "alumno",
    puesto: "Asistente de investigación",
    periodo: {
      inicio: {
        formatoISO: "2024-08-20",
        formatoHumano: "Agosto, 2024"
      },
      fin: {
        formatoISO: "2025-07-01",
        formatoHumano: "Actualidad"
      }
    }
  },
  {
    nombre: "Pablo Maldonado",
    estatus: "alumno",
    puesto: "Colaborador en programa de Machine Learning para procesamiento de lenguaje natural.",
    periodo: {
      inicio: {
        formatoISO: "2025-02-20",
        formatoHumano: "Febrero, 2025"
      },
      fin: {
        formatoISO: "2025-07-01",
        formatoHumano: "Actualidad"
      }
    }
  },
  {
    nombre: "León Dueñas",
    estatus: "alumno",
    puesto: "Alumno de maestria",
    periodo: {
      inicio: {
        formatoISO: "2025-02-01",
        formatoHumano: "Enero, 2025"
      },
      fin: {
        formatoISO: "2025-07-01",
        formatoHumano: "Actualidad"
      }
    }
  },
  {
    nombre: "César Segura",
    estatus: "alumno",
    puesto: "Servicio Social",
    periodo: {
      inicio: {
        formatoISO: "2025-02-21",
        formatoHumano: "Febrero, 2025"
      },
      fin: {
        formatoISO: "2025-07-01",
        formatoHumano: "Actualidad"
      }
    }
  },
  {
    nombre: "Elías López",
    estatus: "alumno",
    puesto: "Servicio Social",
    periodo: {
      inicio: {
        formatoISO: "2025-02-04",
        formatoHumano: "Febrero, 2025"
      },
      fin: {
        formatoISO: "2025-07-01",
        formatoHumano: "Actualidad"
      }
    }
  },
  {
    nombre: "Damián Rojas Reyes",
    estatus: "alumno",
    puesto: "Miembro",
    periodo: {
      inicio: {
        formatoISO: "2024-02-19",
        formatoHumano: "Febrero, 2024"
      },
      fin: {
        formatoISO: "2025-07-01",
        formatoHumano: "Actualidad"
      }
    }
  },
  {
    nombre: "Jessica Huelgas",
    estatus: "academico",
    puesto: "Investigadora en Formación en IA y NLP",
    periodo: {
      inicio: {
        formatoISO: "2024-11-04",
        formatoHumano: "Noviembre, 2024"
      },
      fin: {
        formatoISO: "2025-07-01",
        formatoHumano: "Actualidad"
      }
    }
  },
  {
    nombre: "Jesús Vázquez Osorio",
    estatus: "alumno",
    puesto: "Estudiante de maestría y asistente de investigación",
    periodo: {
      inicio: {
        formatoISO: "2024-03-01",
        formatoHumano: "Febrero, 2024"
      },
      fin: {
        formatoISO: "2025-07-01",
        formatoHumano: "Actualidad"
      }
    }
  },
  {
    nombre: "Oscar Hernandez Salinas",
    estatus: "alumno",
    puesto: "Servicio Social",
    periodo: {
      inicio: {
        formatoISO: "2025-02-17",
        formatoHumano: "Febrero, 2025"
      },
      fin: {
        formatoISO: "2025-07-01",
        formatoHumano: "Actualidad"
      }
    }
  },
  {
    nombre: "Sergio Padilla Reynaud",
    estatus: "academico",
    puesto: "Desarrollador",
    periodo: {
      inicio: {
        formatoISO: "2024-08-20",
        formatoHumano: "Agosto, 2024"
      },
      fin: {
        formatoISO: "2025-07-01",
        formatoHumano: "Actualidad"
      }
    }
  },
  {
    nombre: "Mónica Vázquez Hernández",
    estatus: "academico",
    puesto: "Técnica académica de apoyo a la investigación",
    periodo: {
      inicio: {
        formatoISO: "2024-05-22",
        formatoHumano: "Mayo, 2024"
      },
      fin: {
        formatoISO: "2025-07-01",
        formatoHumano: "Actualidad"
      }
    }
  }
]
