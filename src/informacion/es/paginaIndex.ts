
import type { PaginaInfo } from '@interfaces/types';
import { indexMetadata } from './metadata';
import { miembros } from './miembros';
import { proyectos } from './proyectos';
import { publicaciones } from './publicaciones';
import { quienesSomos } from './quienes-somos';
import { servicioSocial } from './servicio-social';

/*
  Este objeto se encarga de agrupar la informacion expuesta por los demas archivos presentes en /src/informacion/es
  dicha informacion es mostrada por la pagina index (principal) de la aplicacion. Dado que se encuentra en la carpeta
  "es" el contenido de la informacion esta en idioma Español.
*/
export const paginaIndex: PaginaInfo = {
  metadata: indexMetadata,
  miembros,
  quienesSomos,
  proyectos,
  publicaciones,
  servicioSocial,
  bienvenida: "Bienvenid@ al Laboratorio de Lenguaje y Análisis de Textos"
};
