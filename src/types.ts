import type { ImageMetadata } from "astro";

export interface Miembro {
  nombre: string;
  puesto: string;
  imagen: ImageMetadata;
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
