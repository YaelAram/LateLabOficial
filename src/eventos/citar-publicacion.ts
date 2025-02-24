import { publicaciones } from "@informacion/es/publicaciones";
import type { Publicacion } from "@interfaces/types";

export const citarPublicacion = (boton: HTMLButtonElement) => {
  return async () => {
    const formato = boton.dataset.formato ?? "apa";

    const id = boton.dataset.id;
    if (!id) return;

    const publicacion = publicaciones.find((p) => p.id === id);
    if (!publicacion) return;

    const cita = formato === "ieee" ? ieee(publicacion) : apa(publicacion);
    await navigator.clipboard.writeText(cita);

    (boton.firstElementChild as HTMLImageElement).src = "/ok.svg";
  };
};

export const apa = (publicacion: Publicacion) => {
  const { periodo, tipo, titulo, lugar, institucion } = publicacion;
  const autores = new Intl.ListFormat("es", {
    style: "short",
    type: "conjunction",
  })
    .format(publicacion.autores.map(({ apa }) => apa))
    .replace(" y ", " & ");

  return `${autores} (${periodo}). ${titulo}. (${tipo}). ${institucion}, ${lugar}`;
}

export const ieee = (publicacion: Publicacion) => {
  const { periodo, tipo, titulo, lugar, institucion } = publicacion;
  const autores = new Intl.ListFormat("es", {
    style: "short",
    type: "conjunction",
  })
    .format(publicacion.autores.map(({ ieee }) => ieee));

  return `${autores}, "${titulo}", ${tipo}, ${institucion}, ${lugar}, ${periodo}`;
}
