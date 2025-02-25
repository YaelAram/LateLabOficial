import { publicaciones } from "@informacion/es/publicaciones";
import type { Publicacion } from "@interfaces/types";

const autoresFormateador = new Intl.ListFormat("es", {
  style: "short",
  type: "conjunction",
});

const apa = (publicacion: Publicacion) => {
  const { periodo, tipo, titulo, lugar, institucion } = publicacion;
  const autores = autoresFormateador.format(publicacion.autores.map(({ apa }) => apa)).replace(" y ", " & ");

  return `${autores} (${periodo}). ${titulo}. (${tipo}). ${institucion}, ${lugar}.`;
}

const ieee = (publicacion: Publicacion) => {
  const { periodo, tipo, titulo, lugar, institucion } = publicacion;
  const autores = autoresFormateador.format(publicacion.autores.map(({ ieee }) => ieee));

  return `${autores}, "${titulo}", ${tipo}, ${institucion}, ${lugar}, ${periodo}.`;
}

const bibtex = (publicacion: Publicacion) => {
  const clave = `${publicacion.autores.at(0)?.nombre.replaceAll(" ", "")}:${publicacion.periodo},`;
  const autores = `\n  author = {${publicacion.autores.map(({ bibtex }) => bibtex).join(" and ")}},`;
  const anio = `\n  year = {${publicacion.periodo}},`;
  const titulo = `\n  title = {${publicacion.titulo}},`;
  const paginas = `\n  pages = {${publicacion.bibtex.data.pages}},`;

  if (publicacion.bibtex.tipo === "article") {
    const revista = `\n  journal = {${publicacion.bibtex.data.journal}},`;
    const volumen = `\n  volume = {${publicacion.bibtex.data.volume}},`;
    const numero = `\n  number = {${publicacion.bibtex.data.number}},`;
    const doi = `\n  doi = {${publicacion.bibtex.data.doi}},\n`;

    return `@article{${clave}${autores}${anio}${titulo}${paginas}${revista}${volumen}${numero}${doi}}`;
  }

  const tituloLibro = `\n  booktitle = {${publicacion.bibtex.data.book}},\n`;

  return `@inproceedings{${clave}${autores}${anio}${titulo}${paginas}${tituloLibro}}`;
}

const crearCita = (formato: string, publicacion: Publicacion) => {
  if (formato === "ieee") return ieee(publicacion);
  else if (formato === "bibtex") return bibtex(publicacion);

  return apa(publicacion);
}

export const citarPublicacion = (boton: HTMLButtonElement) => {
  return async () => {
    const formato = boton.dataset.formato ?? "apa";

    const id = boton.dataset.id;
    if (!id) return;

    const publicacion = publicaciones.find((p) => p.id === id);
    if (!publicacion) return;

    const cita = crearCita(formato, publicacion);
    await navigator.clipboard.writeText(cita);

    (boton.firstElementChild as HTMLImageElement).src = "/ok.svg";
  };
};
