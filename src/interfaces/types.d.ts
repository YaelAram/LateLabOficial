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
  recursos: Recurso[]
  descripcion: string;
}

export interface Recurso {
  recurso: string;
  nombre: string;
  icono: string;
  descripcion: string;
}

export interface Publicacion {
  id: string;
  titulo: string;
  autores: { nombre: string, apa: string, ieee: string; bibtex: string; }[];
  pdf: string;
  tematicas: string[];
  periodo: number; // Año
  tipo: "Trabajo de grado" | "Tesis de maestría" | "Tesis doctoral";
  lugar: string;
  institucion: string;
  bibtex: { tipo: "article"; data: BibtexArticle; } | { tipo: "inproceedings", data: BibtextInproceedings; };
};

export interface BibtexArticle {
  journal: string;
  volume: string;
  number: string;
  pages: string;
  doi: string;
}

export interface BibtextInproceedings {
  book: string;
  pages: string;
}

export interface ServicioSocial {
  nombre: string;
  responsable: {
    nombre: string;
    cargo: string;
    email: string;
  };
  clave: string;
  objetivo: string;
  eje_tematico: string;
  url: string;
}

export interface QuienesSomos {
  parrafos: string[];
  contactos: Contacto[];
}

export interface Contacto {
  icono: string;
  descripcion: string;
  tipo: "url" | "correo";
  contacto: string;
}
