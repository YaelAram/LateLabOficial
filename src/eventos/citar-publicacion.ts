import { publicaciones } from "@informacion/es/publicaciones";
import type { Publicacion } from "@interfaces/types";

/*
  Esta variable contiene formateador de listas, el cual nos permite unir todos los elementos de una lista en forma
  de conjuncion, es decir, la lista ["A", "B", "C"] la convierte al string "A, B y C".
*/
const autoresFormateador = new Intl.ListFormat("es", {
  style: "short",
  type: "conjunction",
});

/**
 * Esta funcion nos permite crear una cita en formato APA a partir de la informacion de una publicacion.
 * @param { Publicacion } publicacion Contiene la informacion de la publicacion a citar.
 * @returns { string } Un string que contiene la cita en formato APA.
 */
const apa = (publicacion: Publicacion): string => {
  // Desestructuramos las propiedades del objeto que vamos a utilizar para generar la cita
  const { periodo, tipo, titulo, lugar, institucion } = publicacion;
  /*
    Creamos la lista de autores, obtenemos el formato de nombre del autor en formato APA y lo convertimos a string
    con ayuda del formateador de listas. Reemplazamos el caracter "y" por "&".
  */
  const autores = autoresFormateador.format(publicacion.autores.map(({ apa }) => apa)).replace(" y ", " & ");

  // Retornamos la cita en formato APA.
  return `${autores} (${periodo}). ${titulo}. (${tipo}). ${institucion}, ${lugar}.`;
}

/**
 * Esta funcion nos permite crear una cita en formato IEEE a partir de la informacion de una publicacion.
 * @param { Publicacion } publicacion Contiene la informacion de la publicacion a citar.
 * @returns { string } Un string que contiene la cita en formato IEEE.
 */
const ieee = (publicacion: Publicacion): string => {
  // Desestructuramos las propiedades del objeto que vamos a utilizar para generar la cita
  const { periodo, tipo, titulo, lugar, institucion } = publicacion;
  /*
    Creamos la lista de autores, obtenemos el formato de nombre del autor en formato IEEE y lo convertimos a string
    con ayuda del formateador de listas.
  */
  const autores = autoresFormateador.format(publicacion.autores.map(({ ieee }) => ieee));

  // Retornamos la cita en formato IEEE.
  return `${autores}, "${titulo}", ${tipo}, ${institucion}, ${lugar}, ${periodo}.`;
}

/**
 * Esta funcion nos permite crear una cita en formato BibTeX a partir de la informacion de una publicacion.
 * @param { Publicacion } publicacion Contiene la informacion de la publicacion a citar.
 * @returns { string } Un string que contiene la cita en formato BibTeX.
 */
const bibtex = (publicacion: Publicacion): string => {
  // Creamos una clave para la cita utilizando el nombre del primer autor y el año de publicacion
  const clave = `${publicacion.autores.at(0)?.nombre.replaceAll(" ", "")}:${publicacion.periodo},`;
  // Creamos la lista de autores de la publicacion
  const autores = `\n  author = {${publicacion.autores.map(({ bibtex }) => bibtex).join(" and ")}},`;
  // Creamos el atributo con el año de publicacion
  const anio = `\n  year = {${publicacion.periodo}},`;
  // Creamos el atributo con el titulo de la publicacion
  const titulo = `\n  title = {${publicacion.titulo}},`;
  // Creamos el atributo con las paginas que se estan citando dentro de la publiacion
  const paginas = `\n  pages = {${publicacion.bibtex.data.pages}},`;

  // Verificamos si la publicacion es tipo "article" o "inproceedings"
  if (publicacion.bibtex.tipo === "article") {
    // Si es "article"
    // Creamos el atributo con el nombre del periodico, revista o gaceta informativa
    const revista = `\n  journal = {${publicacion.bibtex.data.journal}},`;
    // Creamos el atributo con el volumen de la publicacion
    const volumen = `\n  volume = {${publicacion.bibtex.data.volume}},`;
    // Creamos el atributo con el numero de la publicacion
    const numero = `\n  number = {${publicacion.bibtex.data.number}},`;
    // Creamos el atributo con el DOI de la publicacion
    const doi = `\n  doi = {${publicacion.bibtex.data.doi}},\n`;

    // Retornamos la cita en formato BibTeX tipo "article"
    return `@article{${clave}${autores}${anio}${titulo}${paginas}${revista}${volumen}${numero}${doi}}`;
  }

  // Creamos el atributo con el nombre del trabajo publicado durante una conferencia o congreso
  const tituloLibro = `\n  booktitle = {${publicacion.bibtex.data.book}},\n`;
  // Retornamos la cita en formato BibTeX tipo "inproceedings"
  return `@inproceedings{${clave}${autores}${anio}${titulo}${paginas}${tituloLibro}}`;
}

/**
 * Esta funcion se encarga de generar la cita segun el formato solicitado por el usuario.
 * @param { string } formato Indica el formato en el que se debe generar la cita.
 * @param { Publicacion } publicacion Contiene la informacion de la publicacion a citar.
 * @returns { string } Un string que contiene la cita generada.
 */
const crearCita = (formato: string, publicacion: Publicacion): string => {
  // Verificamos si el formato es IEEE y retornamos la cita IEEE generada
  if (formato === "ieee") return ieee(publicacion);
  // Verificamos si el formato es BibTeX y retornamos la cita BibTeX generada
  else if (formato === "bibtex") return bibtex(publicacion);

  // Por defecto, retorna la cita en formato APA
  return apa(publicacion);
}

/**
 * Esta funcion se encarga de crear una funcion asignable como segundo parametro de la funcion addEventListener
 * @param {HTMLButtonElement} boton Contiene la referencia al boton HTML que contiene informacion sobre el ID de la 
 * publiacion y el formato en el que debe ser generada.
 * @returns Retorna una funcion encargada de manejar el evento click sobre un boton.
 */
export const citarPublicacion = (boton: HTMLButtonElement) => {
  return async () => {
    // Obtenemos el formato en que debemos generar la cita, por defecto creamos una cita en formato APA
    const formato = boton.dataset.formato ?? "apa";

    // Obtenermos el ID de la publicacion a partir de la cual habra que generar la cita
    const id = boton.dataset.id;
    // Si el ID no existe o es un string vacio retornamos undefined
    if (!id) return;

    // Buscamos la publiacion dentro del arreglo de publicaciones comparando el ID
    const publicacion = publicaciones.find((p) => p.id === id);
    // Si la publicacion no existe retornamos undefined
    if (!publicacion) return;

    // Generamos la cita enviando el formato y la publicacion
    const cita = crearCita(formato, publicacion);
    // Copiamos la cita en el portapapeles del dispositivo del usuario
    await navigator.clipboard.writeText(cita);

    // Cambiamos el icono a una palomita para dar retroalimentacion visual al usuario de que la cita ha sido copiada
    (boton.firstElementChild as HTMLImageElement).src = "/ok.svg";
  };
};
