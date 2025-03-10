/*
  Esta interfaz describe el tipo de dato Miembro el cual es utilizado por el componente TarjetaMiembro, contiene la 
  informacion basica sobre un integrante del laboratorio.

  Propiedades:
    - nombre: Contiene el nombre del integrante, se sugiere solo incluir el primer nombre y apellido.
    - puesto: Indica el nombre del puesto o trabajo que desempeño durante su estancia en el laboratorio.
    - estatus: Indica si el miembro es un alumno actual o anterior o si se trato de un academico.
    - periodo: Contiene informacion sobre el periodo durante el cual el integrante formo parte del laboratorio.
      - inicio: Contiene la fecha en la que entro al laboratorio.
      - fin: Contiene la fecha en la que salio del laboratorio.

  Nota: En la propiedad formatoISO se debe escribir la fecha en formato ISO 8601, por ejemplo, "2024-07-28".
  
  Nota: En la propiedad formatoHumano se debe escribir la fecha en un formato facil de leer, se recomienda solo 
  incluir el mes y año, por ejemplo, "Julio 2024".
*/
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

/*
  Esta interfaz describe el tipo de dato Proyecto el cual es utilizado por el componente TarjetaProyecto, contiene la 
  informacion basica de un proyecto generado en el laboratorio.

  Propiedades:
    - nombre: Contiene el nombre del poryecto.
    - colabaoradores: Es una lista con los nombres de los integrantes del equipo de desarrollo.
    - periodo: Indica el año en el que se llevo a cabo el proyecto.
    - recursos: Contiene la lista de recursos de interes relacionados al proyecto tales como el link a la publicacion
      cientifica, repositorios de codigo o demos.
    - descripcion: Contiene una breve descripcion del proyecto.
*/
export interface Proyecto {
  nombre: string;
  colaboladores: string[];
  periodo: number;
  recursos: Recurso[]
  descripcion: string;
}

/*
  Esta interfaz describe el tipo de dato Recurso el cual es utilizado para describir un recurso de interes relacionado a 
  un proyecto.

  Propiedades:
    - recurso: Contiene el link al recurso.
    - nombre: Indica el nombre del recurso.
    - icono: Indica la ruta al icono que representa el tipo de recurso.
    - descripcion: Contiene una breve descripcion acerca del recurso.

  Nota: Este tipo de dato nos permite agregar recursos tales como el link a la publicacion cientifica del proyecto,
  links a los repositorios de codigo o demos del proyecto.
*/
export interface Recurso {
  recurso: string;
  nombre: string;
  icono: string;
  descripcion: string;
}

/*
  Esta interfaz describe el tipo de dato Publicacion el cual es utilizado por el componente TarjetaPublicacion, contiene la 
  informacion basica de una publicacion generado en el laboratorio.

  Propiedades:
    - id: Contiene el identificador unico de la publicacion, es importante que dicho id sea unico ya que es utilizado
      para crear la cita de la publiacion.
    - titulo: Contiene el titulo de la publicacion.
    - autores: Contiene un arreglo con la informacion de todos los autores de la publiacion.
    - pdf: Contiene el link a la publiacion.
    - tematicas: Es un arreglo de strings con palabras clave sobre la publicacion o temas cubiertos.
    - periodo: Indica el año en el que fue publicado.
    - tipo: Indica el tipo de publicacion, si es un trabajo de grado, una tesis, tesina, etc.
    - lugar: Indica el lugar de publicacion.
    - institucion: Indica el nombre de la isntitucion bajo la cual se hizo la publiacion.
    - bibtex: Contiene informacion relacionada para generar citas en formato BibTeX.
*/
export interface Publicacion {
  id: string;
  titulo: string;
  autores: Autor[];
  pdf: string;
  tematicas: string[];
  periodo: number;
  tipo: "Trabajo de grado" | "Tesis de maestría" | "Tesis doctoral";
  lugar: string;
  institucion: string;
  bibtex: { tipo: "article"; data: BibtexArticle; } | { tipo: "inproceedings", data: BibtextInproceedings; };
  abstract: string;
};

/*
  Esta interfaz describe el tipo de dato Autor contiene el nombre del autor y la abreviatura de nombre a utilizar 
  segun el formato de cita (APA, IEEE o BibTeX).

  Propiedades:
    - nombre: Contiene el nombre del autor, se sugiere incluir unicamente el primer nombre y apellido. Ejemplo "Juan Rojas".
    - apa: Contiene la abreviatura de nombre a utilizar para una cita en formato APA. Ejemplo "Rojas, J.".
    - ieee: Contiene la abreviatura de nombre a utilizar para una cita en formato IEEE. Ejemplo "J. Rojas".
    - bibtex: Contiene la abreviatura de nombre a utilizar para un cita en formato BibTeX. Ejemplo "Rojas, Emilio".
*/
export interface Autor {
  nombre: string;
  apa: string;
  ieee: string;
  bibtex: string;
}

/*
  Esta interfaz describe el tipo de dato BibtexArticle contiene la informacion necesaria para la creacion en formato BibTeX
  de un articulo.

  Propiedades:
    - journal: Indica el nombre de la revista, periodico o gaceta informativa.
    - volume: Indica el volumen de publicacion de periodico, revista o gaceta informativa.
    - number: Indica el numero de publicacion de periodico, revista o gaceta informativa.
    - pages: Indica las paginas que contienen la informacion que se esta citando.
    - doi: Indica el codigo unico de indentificacion de la publicacion.
*/
export interface BibtexArticle {
  journal: string;
  volume: string;
  number: string;
  pages: string;
  doi: string;
}

/*
  Esta interfaz describe el tipo de dato BibtexArticle contiene la informacion necesaria para la creacion en formato BibTeX
  de un trabajo presentado durante un congreso o conferencia.

  Propiedades:
    - book: Contiene el nombre del trabajo.
    - pages: Indica las paginas que contienen la informacion que se esta citando.
*/
export interface BibtextInproceedings {
  book: string;
  pages: string;
}

/*
  Esta interfaz describe el tipo de dato ServicioSocial utilizado por el componente TarjetaOferta contiene la
  informacion basica sobre una oferta de servicio social dentro del laboratorio.

  Propiedades:
    - nombre: Contiene el nombre de la oferta.
    - clave: Contiene la clave utilizada para dar de alta el servicio social dentro del sistema de la UNAM.
    - objetivo: Indica el objetivo a desarrollar durante la durancion del servicio social.
    - eje_tematico: Contiene el eje tematico de la oferta.
    - url: Contiene el link a la plataforma SIASSYPP con la informacion detallada de la oferta.
    - responsable: Contiene informacion basica sobre el principal responsable de la oferta de servicio social.
      - nombre: Indica el nombre de la persona a cargo de la oferta.
      - cargo: Indica el cargo de la persona encargada dentro de la institucion.
      - email: Contiene el correo electronico de la persona encargada.
*/
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

/*
  Esta interfaz describe el tipo de dato QuienesSomos utilizado por el componente del mismo nombre, contiene los 
  parrafos de texto que dan la bienvenida al usuario a la pagina oficial del laboratorio y una lista con los 
  metodos de contacto mas comunes.

  Propiedades:
    - parrafos: Contienen los parrafos de bienvenida y una breve descripcion sobre el laboratorio y que se lleva a cabo en el.
      Se sugiere no utilizar mas de dos parrafos.
    - contactos: Contiene metodos de contacto.
*/
export interface QuienesSomos {
  parrafos: string[];
  contactos: Contacto[];
}

/*
  Esta interfaz describe el tipo de dato Contacto contiene informacion sobre el icono y enlace de contacto.

  Propiedades:
    - icono: Contiene el link al icono a utilizar.
    - descripcion: Contiene una breve descripcion sobre a donde lleva el enlace.
    - tipo: Indica el tipo de contacto, si es "corre" crea un link que abrira automaticamente el app de correo electronico
      del usuario, caso contrario abre el link en una nueva pestaña del navegador.
    - contacto: Contiene el link de contacto.
*/
export interface Contacto {
  icono: string;
  descripcion: string;
  tipo: "url" | "correo";
  contacto: string;
}

/*
  Esta interfaz describe el tipo de dato Metadata contiene la informacion necesaria para generar los metatags que ayudan a
  los buscadores a indexar nuestra paginas.

  Propiedades:
    - title: Contiene el titulo de la pagina (el que se muestra en la pestaña del navegador).
    - description: Contiene una breve descripcion sobre el contenido de la pagina.
    - keywords: Contiene un arreglo de strings, cada string debe contener una palabra clave que describa el contenido 
      de la pagina.
    - image: Indica la ruta a la imagen que debe mostrarse junto al link. Es usual ver esta imagen cuando compartimos
      el link de una pagina a traves de una red social.
    - language: Indica el idioma en el que esta escrito el contenido de la pagina en formato 639-1.
*/
export interface Metadata {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  language: string;
}

export interface PaginaInfo {
  metadata: Metadata;
  miembros: Miembro[];
  quienesSomos: QuienesSomos;
  proyectos: Proyecto[];
  publicaciones: Publicacion[];
  servicioSocial: ServicioSocial[];
  bienvenida: string;
}
