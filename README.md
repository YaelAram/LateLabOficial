# LateLab Sitio Oficial

_Actualizado el 28 de febrero de 2028._

Este repositorio contiene el código fuente del sitio oficial del **Laboratorio de Lenguaje y Análisis de Textos** impartido
en el **Instituto de Investigaciones en Matemáticas Aplicadas y Sistemas** (IIMAS) de la
**Universidad Nacional Autónoma de México** por la Investigadora Titular A de TC **Helena Montserrat Gómez Adorno**.

## Tecnologías Utilizadas

- Astro 5.11.0: Este framework facilita la creación de sitios estáticos al permitirnos la generar componentes con el fin de
  reutilizar la lógica de nuestra aplicación, optimización de imágenes y encapsular los estilos CSS por componente.
- Prettier 3.5.1: Nos permite aplicar formato a nuestro código con el fin de facilitar su legibilidad.
- TypeScript 5.8.3

## Configuración VS Code

#### Extensiones

Se recomienda instalar las siguientes extensiones y configuraciones con el fin de tener la mejor experiencia de desarrollo:

- Extension Astro: Agrega soporte de proyectos Astro, ofrece sugerencias al escribir, _snippets_, etc. Para mayor información
  [Sitio oficial extension Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode).
- Prettier - Code Formatter: Nos permite dar formato a nuestro código, lee automáticamente el archivo de configuración
  de Prettier (incluido en el repositorio) y configurar VS Code para formatear automáticamente nuestro código. Para mayor
  información [Sitio oficial extension Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

Opcionalmente:

- Error Lens: Resalta los errores en nuestro código agregando un mensaje de la razón. Para mayor información
  [Sitio oficial extension Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens).

#### Configuraciones

Establecer _Prettier_ como nuestro formateador por defecto:

```json
"editor.defaultFormatter": "esbenp.prettier-vscode"
```

Indicar a VS Code que debe formatear el código al guardar los cambios:

```json
"editor.formatOnSave": true
```

## Instalaciones previas

- NodeJS: Es un entorno de ejecución de JavaScript, la versión utilizada para el desarrollo fue la LTS 22.11.0, sin embargo,
  se recomienda utilizar la versión LTS de NodeJS más reciente o una con soporte vigente.
- NPM: Es el gestor de paquetes por defecto en NodeJS, la versión utilizada fue la 11.1.0, sin embargo, se recomienda
  utilizar la versión más reciente.
- Git: Para el control de versiones del proyecto.
- GitHub CLI: Nos permite iniciar sesión en GitHub con el fin de poder realizar _git push_ de nuestros cambios.

> [!NOTE]
> Se recomienda el uso de un gestor de versiones de NodeJS como FNM o NVM

## Colaborar en el proyecto

> [!IMPORTANT]
> Previo a realizar el _push_ de nuestros cambios debemos solicitar permiso de escritura al encargado del repositorio.

> [!IMPORTANT]
> En el comando _git tag_ (paso 7) reemplaza el texto "1.0.0" con la misma versión que ingresaste en el _package.json_.

1. Configurar _Git_ con el usuario y contraseña del nuevo colaborador:

```console
git config --global user.name "NOMBRE"
git config --global user.email "EMAIL"
```

2. Iniciar sesión en GitHub:

```console
gh auth login
```

3. Clonar el repositorio:

```console
git clone
```

4. Ingresar al directorio del proyecto e instalar las dependencias:

```console
cd
npm i
```

5. Realizar los cambios solicitados.
6. Actualizar la versión del archivo _package.json_ siguiendo el versionamiento semántico.
7. Realizar el _push_ de los cambios.

```console
git add .
git commit -m "RESUMEN DE CAMBIOS"
git tag -a v1.0.0 -m "Version 1.0.0"
git push -u origin master
git push --tags
```

## Comandos relevantes de la aplicación

- Ejecutar el servidor de pruebas:

```console
npm run dev
```

- Construir la versión de producción del proyecto:

```console
npm run build
```

- Ejecutar el servidor de prueba con los archivos de producción:

```console
npm run preview
```

## Actualizar la versión de Astro:

> [!IMPORTANT]
> Previo a realizar el _push_ de nuestros cambios debemos solicitar permiso de escritura al encargado del repositorio.

> [!IMPORTANT]
> En el comando _git tag_ (paso 7) reemplaza el texto "1.0.0" con la misma versión que ingresaste en el _package.json_.

> [!WARNING]
> Recuerda haber creado una rama para gestionar la actualización de Astro y haberte movido a ella.

1. Crear una nueva rama del repositorio y navegar a ella:

```console
git checkout -b NOMBRE_RAMA
```

2. Ejecutar el comando de actualización de Astro:

```console
npx @astrojs/upgrade
```

3. Resolver los posibles _breaking changes_ generados por la actualización.
4. Realizar un _commit_ con los cambios realizados.
5. Fusionar ambas ramas.

```console
git checkout RAMA_MAIN
git merge NOMBRE_RAMA
```

6. Actualizar la versión del archivo _package.json_ siguiendo el versionamiento semántico.
7. Si _Git_ indica que la fusión tuvo conflictos se deberá realizar un nuevo _commit_ y agregamos un nuevo _tag_ de versión:

```console
git add .
git commit -m "RESUMEN DE CAMBIOS"
git tag -a v1.0.0 -m "Version 1.0.0"
```

8. Subimos nuestros cambios al repositorio.

```console
git push -u origin master
git push --tags
```
