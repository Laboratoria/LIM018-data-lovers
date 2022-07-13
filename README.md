

### Definición del producto

Nuestra web muestra datos e información  de las películas animadas del Studio Ghibli, puediendo visualizarse y manipularse la informacion de las pelícuñas de diferentes directores y productores de mensionado estudio de producción.

El objetivo de nuestra página es que los usuarios puedan filtrar las películas animadas por director o productor, así como poder ordenar alfabeticamente o por año la data ya filtrada. Para ello utilizamos una interfaz intuitiva y amigable para el usuario, ademas de ser responsive para distintos dispositivos.

### Historias de usuario

HISTORIA DE USUARIO 1
Yo como usuaria me gustaria ver las diferentes animaciones del Studio Ghibli, leer una breve descripcion de las peliculas, director y productor, año de lanzamiento, asi como tambien conocer a sus personajes, locacion y vehiculos de la historia. Tambien ordenar la informacion por nombre director y productor y poder orderlos alfabeticamente o por fecha.

---- Criterios de Aceptación 1 ----
* El usuario debe poder filtrar por director y productor, y ordenar por año.
* El usuario debe poder ver una descripcion de la pelicula y datos principales.
* El usuario debe poder ordenar los resultados de A-Z o de Z -A en todos los campos.
* El usuario debe poder ordenar los resultados por Reciente-Antiguo o Reciente-Antiguo.

---- Definición de Terminado 1 ----
* EL producto debe ser aprobado por los test.

HISTORIA DE USUARIO 2
Yo como usuario me gustaria conocer estadisticas de  las mejores animaciones del Studio Ghibli clasificandolas por los mejores rt score.

---- Criterios de Aceptación 2 ----
* El usuario debe poder generar un listado de cantidad de animaciones por director
* El usuario debe poder visualizar un grafico de barras que muestre las 5 mejores peliculas animadas.

---- Definición de Terminado 2 ----
* EL producto debe ser aprobado por los test.


### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

![Prototipo de Baja Fidelidad 1](https://github.com/Denimarx/LIM018-data-lovers/blob/main/src/imagenes/baja-fidelidad11.jpeg?raw=true)

![Prototipo de Baja Fidelidad 2](https://github.com/Denimarx/LIM018-data-lovers/blob/main/src/imagenes/baja-fidelidad22.jpeg?raw=true)

![Prototipo de Baja Fidelidad 3](https://github.com/Denimarx/LIM018-data-lovers/blob/main/src/imagenes/baja-fidelidad33.jpeg?raw=true)


#### Prototipo de alta fidelidad

![Prototipo de Alja Fidelidad 1](https://github.com/Denimarx/LIM018-data-lovers/blob/main/src/imagenes/alta-fidelidad11.jpeg?raw=true)

![Prototipo de Alja Fidelidad 2](https://github.com/Denimarx/LIM018-data-lovers/blob/main/src/imagenes/alta-fidelidad22.jpeg?raw=true)

![Prototipo de Alja Fidelidad 3](https://github.com/Denimarx/LIM018-data-lovers/blob/main/src/imagenes/alta-fidelidad33.jpeg?raw=true)

![Prototipo de Alja Fidelidad 4](https://github.com/Denimarx/LIM018-data-lovers/blob/main/src/imagenes/alta-fidelidad44.jpeg?raw=true)

![Prototipo de Alja Fidelidad 5](https://github.com/Denimarx/LIM018-data-lovers/blob/main/src/imagenes/alta-fidelidad55.jpeg?raw=true)

![Prototipo de Alja Fidelidad 6](https://github.com/Denimarx/LIM018-data-lovers/blob/main/src/imagenes/alta-fidelidad60.jpeg?raw=true)


#### TESTEOS DE USABILIDAD

Durantre el proceso de diseño de la página web, se mostró a  usuarios para recibir feedback y hacer mejoras. También en cada sprint  del proyecto se recibió feedback de compañeras y coaches que nos permitieron testear la funcionalidad.


### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar la interfaz de usuario se trabajó en su implementación.

Como mínimo, tu implementación permite:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista,
   etc.
2. Al usuario interactuar para obtener la infomación que necesita.
3. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
   tamaños de pantallas: móviles, tablets y desktops.
4. Que la interfaz siga los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluía Pruebas Unitarias (_tests_), por ello se crearon las funciones encargadas de  _procesar_,
_filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.

Las _pruebas unitarias_ dan una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/data.js` que contiene las funciones y está detallado
en la sección de [Consideraciones técnicas](#srcdatajs).

![Tes Unitarios](https://github.com/Denimarx/LIM018-data-lovers/blob/main/src/imagenes/test-unitarios.jpeg?raw=true)

## 6. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. 

Features/características extra sugeridas:

* En lugar de consumir la data estática brindada en este repositorio, se puede
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json` de
  de cada set datos.
* Agregarle a la interfaz de usuario implementada visualizaciones gráficas. Para
  ello se recomienda explorar librerías de gráficas como
  [Chart.js](https://www.chartjs.org/)
  o [Google Charts](https://developers.google.com/chart/).
* 100% Coverage

## 7. Consideraciones técnicas

La lógica del proyecto esta implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
con la excepción de librerías para hacer gráficas (charts); ver
[_Parte opcional_](#6-hacker-edition) más arriba.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── EXTRA.md
├── README.md
├── package.json
├── src
|  ├── data (según con qué data trabajes)
|  |  ├── lol
|  |  |  ├── lol.js
|  |  |  ├── lol.json
|  |  |  └── README.md
|  |  ├── pokemon
|  |  |  ├── pokemon.js
|  |  |  ├── pokemon.json
|  |  |  └── README.md
|  |  └── rickandmorty
|  |  |  ├── rickandmorty.js
|  |  |  ├── rickandmorty.json
|  |  |  └── README.md
|  |  └── athletes
|  |  |  ├── athletes.js
|  |  |  ├── athletes.json
|  |  |  └── README.md
|  |  └── ghibli
|  |  |  ├── ghibli.js
|  |  |  ├── ghibli.json
|  |  |  └── README.md
|  ├── data.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.spec.js

directory: 7 file: 20
```

### `src/index.html`

Contiene un archivo `index.html`,la página que se mostrará al usuario. También nos sirve para indicar
qué scripts se usarán y unir todo lo que hemos hecho.

### `src/main.js`

Se recomienda usar `src/main.js` para todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....

Esta no es la única forma de dividir el código, se puede usar más archivos y
carpetas, siempre y cuando la estructura sea clara.

### `src/data.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos
y objetos.

Este archivo contiene toda la funcionalidad que corresponde
a obtener, procesar y manipular datos (tus funciones). Por ejemplo:

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.

Estos nombres de funciones y de parámetros son solamente referenciales, es decisión del equipo llegar a usarlas.

Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que el usuario interactúe (click,
filtrado, ordenado, ...).

### `src/data`

En esta carpeta están los datos de las diferentes fuentes. Encontrarás una
carpeta por cada fuente, y dentro de cada carpeta dos archivos: uno con la
extensión `.js` y otro `.json`. Ambos archivos contienen la misma data; la
diferencia es que el `.js` lo usaremos a través de una etiqueta `<script>`,
mientras que el `.json` está ahí para opcionalmente cargar la data de forma
asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
(ver sección de [_Parte Opcional_](#6-hacker-edition)).

### `test/data.spec.js`

Se debe completar las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.

## 8. Pistas, tips y lecturas complementarias

### Primeros pasos

Antes de empezar a escribir código, se debe definir qué deberá hacer el producto
en base al conocimiento que puedas obtener de tu usuario. Estas preguntas 
pueden ayudar:

* ¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?
* Toda investigación previa debe tener como resultado todas las Historias
  de Usuario de tu proyecto.
* No hacer los prototipos de alta fidelidad de todas las Historias. Comienza
  solamente por los que se necesiten para tu Sprint 1 (semana 1 de trabajo). Más
  pistas en la guía de organización para el proyecto.

Cuando se esté listo para codear, se sugiere empezar de esta manera:

1. Una de las integrantes del equipo debe realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. La otra integrante del equipo deber hacer un fork **del
   repositorio de su compañera** y
   [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote`
   hacia el mismo.
2. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
3. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
5. Para ver la interfaz de tu programa en el navegador, usa el comando
  `npm start` para arrancar el servidor web y dirígete a
  `http://localhost:5000` en tu navegador.
6. A codear se ha dicho! :rocket:

### Contenido de referencia

#### Diseño de experiencia de usuario (User Experience Design)

* Investigación con usuarios / entrevistas
* Principios de diseño visual

#### Desarrollo Front-end

* Unidad de testing en curso de JavaScript en LMS.
* Unidad de arreglos en curso de JavaScript en LMS.
* Unidad de objetos en curso de JavaScript en LMS.
* Unidad de funciones en curso de JavaScript en LMS.
* Unidad de DOM en curso de Browser JavaScript en LMS.
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-es.html)
* [expressions-vs-statements](https://2ality.com/2012/09/expressions-vs-statements.html)
* [expresión vs sentencia](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [datos atómicos vs datos estructurados](https://www.todojs.com/tipos-datos-javascript-es6/)
* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)

#### Herramientas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

#### Organización del Trabajo

* [Historias de Usuario](https://www.youtube.com/watch?v=ky6wFiF5vMk&t=344s).
  Ojo que Cris no diferencia _Definición de terminado_ de _Criterios de
  Aceptación_ y nosotros sí lo haremos. Más detalles en la guía.
* [Cómo dividir H.U.](https://www.youtube.com/watch?v=Ueq786iZ30I&t=341s)
* [Guía para Data Lovers](https://docs.google.com/presentation/d/e/2PACX-1vQhx9D36NjpH-Daea-ITPUDUzNL8ZiNAprq_7b5PSUrfutk45tEtaOLz2lmd8f54_5jX1hypDM8f8SM/pub?start=false&loop=false&delayms=60000)

## 9. Checklist

* [ ] Usa VanillaJS.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
* [ ] UI: Es _responsive_.
