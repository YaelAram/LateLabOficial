import type { Publicacion } from "@interfaces/types";

export const formatoAPA = (publicacion: Publicacion) => {
  const { periodo, tipo, titulo, lugar, institucion } = publicacion;
  const autores = new Intl.ListFormat("es", {
    style: "short",
    type: "conjunction",
  })
    .format(publicacion.autores.map(({ apa }) => apa))
    .replace(" y ", " & ");

  return `${autores} (${periodo}). ${titulo}. (${tipo}). ${institucion}, ${lugar}`;
}

export const formatoIEEE = (publicacion: Publicacion) => {
  const { periodo, tipo, titulo, lugar, institucion } = publicacion;
  const autores = new Intl.ListFormat("es", {
    style: "short",
    type: "conjunction",
  })
    .format(publicacion.autores.map(({ ieee }) => ieee));

  return `${autores}, "${titulo}", ${tipo}, ${institucion}, ${lugar}, ${periodo}`;
}
