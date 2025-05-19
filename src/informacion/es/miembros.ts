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
    nombre: "Juan Pérez",
    puesto: "Maestro",
    estatus: "academico",
    periodo: {
      inicio: {
        formatoISO: "2025-01",
        formatoHumano: "Enero 2025",
      },
      fin: {
        formatoISO: "2025-07",
        formatoHumano: "Julio 2025",
      }
    }
  },
  {
    nombre: "Juan Pérez",
    puesto: "Maestro",
    estatus: "academico",
    periodo: {
      inicio: {
        formatoISO: "2025-01",
        formatoHumano: "Enero 2025",
      },
      fin: {
        formatoISO: "2025-07",
        formatoHumano: "Julio 2025",
      }
    }
  },
  {
    nombre: "Juan Pérez",
    puesto: "Maestro",
    estatus: "academico",
    periodo: {
      inicio: {
        formatoISO: "2025-01",
        formatoHumano: "Enero 2025",
      },
      fin: {
        formatoISO: "2025-07",
        formatoHumano: "Julio 2025",
      }
    }
  },
  {
    nombre: "María López",
    puesto: "Maestro",
    estatus: "academico",
    periodo: {
      inicio: {
        formatoISO: "2025-01",
        formatoHumano: "Enero 2025",
      },
      fin: {
        formatoISO: "2025-07",
        formatoHumano: "Julio 2025",
      }
    }
  },
  {
    nombre: "Carlos Gómez",
    puesto: "Maestro",
    estatus: "alumno",
    periodo: {
      inicio: {
        formatoISO: "2025-01",
        formatoHumano: "Enero 2025",
      },
      fin: {
        formatoISO: "2025-07",
        formatoHumano: "Julio 2025",
      }
    }
  },
  {
    nombre: "Carlos Gómez",
    puesto: "Maestro",
    estatus: "alumno",
    periodo: {
      inicio: {
        formatoISO: "2025-01",
        formatoHumano: "Enero 2025",
      },
      fin: {
        formatoISO: "2025-07",
        formatoHumano: "Julio 2025",
      }
    }
  },
  {
    nombre: "Ana Rodríguez",
    puesto: "Maestro",
    estatus: "alumno",
    periodo: {
      inicio: {
        formatoISO: "2025-01",
        formatoHumano: "Enero 2025",
      },
      fin: {
        formatoISO: "2025-07",
        formatoHumano: "Julio 2025",
      }
    }
  },
  {
    nombre: "Ana Rodríguez",
    puesto: "Maestro",
    estatus: "alumno",
    periodo: {
      inicio: {
        formatoISO: "2025-01",
        formatoHumano: "Enero 2025",
      },
      fin: {
        formatoISO: "2025-07",
        formatoHumano: "Julio 2025",
      }
    }
  },
  {
    nombre: "Luis Fernández",
    puesto: "Maestro",
    estatus: "alumno",
    periodo: {
      inicio: {
        formatoISO: "2025-01",
        formatoHumano: "Enero 2025",
      },
      fin: {
        formatoISO: "2025-07",
        formatoHumano: "Julio 2025",
      }
    }
  },
  {
    nombre: "Laura Martínez",
    puesto: "Maestro",
    estatus: "alumno",
    periodo: {
      inicio: {
        formatoISO: "2025-01",
        formatoHumano: "Enero 2025",
      },
      fin: {
        formatoISO: "2025-07",
        formatoHumano: "Julio 2025",
      }
    }
  },
  {
    nombre: "Luis Fernández",
    puesto: "Maestro",
    estatus: "alumno",
    periodo: {
      inicio: {
        formatoISO: "2025-01",
        formatoHumano: "Enero 2025",
      },
      fin: {
        formatoISO: "2025-07",
        formatoHumano: "Julio 2025",
      }
    }
  },
  {
    nombre: "Laura Martínez",
    puesto: "Maestro",
    estatus: "alumno",
    periodo: {
      inicio: {
        formatoISO: "2025-01",
        formatoHumano: "Enero 2025",
      },
      fin: {
        formatoISO: "2025-07",
        formatoHumano: "Julio 2025",
      }
    }
  },
  {
    nombre: "José González",
    puesto: "Maestro",
    estatus: "exalumno",
    periodo: {
      inicio: {
        formatoISO: "2025-01",
        formatoHumano: "Enero 2025",
      },
      fin: {
        formatoISO: "2025-07",
        formatoHumano: "Julio 2025",
      }
    }
  },
  {
    nombre: "Sofía Hernández",
    puesto: "Maestro",
    estatus: "exalumno",
    periodo: {
      inicio: {
        formatoISO: "2025-01",
        formatoHumano: "Enero 2025",
      },
      fin: {
        formatoISO: "2025-07",
        formatoHumano: "Julio 2025",
      }
    }
  },
  {
    nombre: "José González",
    puesto: "Maestro",
    estatus: "exalumno",
    periodo: {
      inicio: {
        formatoISO: "2025-01",
        formatoHumano: "Enero 2025",
      },
      fin: {
        formatoISO: "2025-07",
        formatoHumano: "Julio 2025",
      }
    }
  },
  {
    nombre: "Sofía Hernández",
    puesto: "Maestro",
    estatus: "exalumno",
    periodo: {
      inicio: {
        formatoISO: "2025-01",
        formatoHumano: "Enero 2025",
      },
      fin: {
        formatoISO: "2025-07",
        formatoHumano: "Julio 2025",
      }
    }
  },
];
