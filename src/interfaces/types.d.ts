export interface Miembro {
  nombre: string;
  puesto: string;
  estatus: string;
  periodo: {
    inicio: {
      formatoISO: string;
      formatoHumano: string;
    },
    fin: {
      formatoISO: string;
      formatoHumano: string;
    }
  }
};
