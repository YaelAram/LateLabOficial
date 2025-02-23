export interface Miembro {
  nombre: string;
  puesto: string;
  estatus: 'academico' | 'alumno' | 'exalumno';
  periodo: {
    inicio: {
      formatoISO: string;
      formatoHumano: string;
    },
    fin: {
      formatoISO: string;
      formatoHumano: string;
    }
  };
};

export interface Proyecto {
  nombre: string;
  colaboladores: string[];
  periodo: number; // Año
  repositorio?: string;
  publicacion?: string;
  demo?: string;
  descripcion: string;
}

export interface Publicacion {
  id: string;
  titulo: string;
  autores: { nombre: string, apa: string, ieee: string; }[];
  pdf: string;
  tematicas: string[];
  periodo: number; // Año
  tipo: "Trabajo de grado" | "Tesis de maestría" | "Tesis doctoral";
  lugar: string;
  institucion: string;
};

export interface ServicioSocial {
  nombre: string;
  institucion: string;
  dependencia: string;
  responsable: {
    nombre: string;
    cargo: string;
    email: string;
  };
  clave: string;
  objetivo: string;
  eje_tematico: string;
}

export interface Contacto {
  telefono: string;
  email: string;
}
