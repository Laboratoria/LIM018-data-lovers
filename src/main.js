import {filterByDirector, filterByProducer, orderAz, orderZa, sortByAsc, sortByDesc, compute} from './data.js';

import data from './data/ghibli/ghibli.js';
const dataFilms = data.films;

const filtersDirector = document.getElementById("filtersDirector");
const filtersProducer = document.getElementById("filtersProducer");
const btnpeliculas = document.getElementById("listaPeliculas");
const header = document.getElementById('header');
const contenedorPaginas = document.getElementById("contenedorPaginas");
const btnhome = document.getElementById("home");
const containerFilms = document.getElementById('containerFilms');
//const buttonGraphic = document.getElementById('buttonGraphic');
//const boxGraphic = document.getElementById('box_graphic');

//const descripcionPersonaje =document.getElementById('descripcion');
const buttonGraphic = document.getElementById('buttonGraphic')
const boxGraphic = document.getElementById('box_graphic')

/* CLIK PARA EL BOTON GO DEL VIDEO */
btnpeliculas.addEventListener("click", () => {
  header.className = "disabled";
  contenedorPaginas.className = "enabled";
  containerFilms.innerHTML = "";
  movie(dataFilms)
  const videoportada = document.getElementById('videoportada');
  videoportada.pause();
  })

/*--------------CLIK BOTON RETURN --------------------*/
  btnhome.addEventListener("click", () => {
    header.className = "enabled";
    contenedorPaginas.className = "disabled";
    const videoportada = document.getElementById('videoportada');
    videoportada.play();
  });

 /*****  AL DAR CLIK A CADA PELI REALIZAR FUNCION  "newContainer"  **************/
 /*inicio de funcion newContainer*/
 const newContainer = (e) => {
  containerFilms.innerHTML = "";

/******************* section donde ira el poster y unos parrafos  ******************* */
  let sectionFilm = document.createElement("section");
  sectionFilm.classList.add('movie__section'); /** pelicula ** */
  containerFilms.appendChild(sectionFilm);

  sectionFilm.innerHTML =`<div class="movie_title"><h3>${e.title}</h3></div>
  <div class="movie_img"><img class="imgDirector"src="${e.poster}" alt="imagen"></div>
  <div class="movie_description"><p class="titleDirector"> ${e.title}</p>
  <p class="parrafoDirector">Year:"${e.release_date}"</p>
  <p class="parrafoDirector">Director:"${e.director}"</p>
  <p class="parrafoDirector">Producer: "${e.producer}"</p>
  </div> ` ;

  let btnReturn = document.createElement("button"); /* boton para retornar a listado de peliculas */
  btnReturn.classList.add('classbtn');
  sectionFilm.appendChild(btnReturn);
  btnReturn.innerText = "Return";

  btnReturn.addEventListener("click", () => {
    containerFilms.innerHTML = "";
    movie(dataFilms);
    })
  /************ BOTON PARA AGRUPAR EL  DIV DEL COSTADO */

  let containerBtnDescripcion = document.createElement("div");
  containerBtnDescripcion.classList.add('containerBtnDescripcion');
  containerFilms.appendChild(containerBtnDescripcion);

  /****************************************/
  let btnContainer = document.createElement("section");/******container para botones : descripciojn, personajes, locacion y vehiculos*/
  btnContainer.classList.add('btn__container');
  containerBtnDescripcion.appendChild(btnContainer);

  let containerSection= document.createElement("section"); /** section donde ira decricopin y las imagenes de los personajes */
  containerSection.classList.add('containerSection');
  containerBtnDescripcion.appendChild(containerSection);

  /*************      descripcion   - denis  **************/
  const btnDescription = document.createElement("button"); /**   se crea botnes dentro del contenedor de botones*/
  btnDescription.classList.add('classbtn')
  btnDescription.innerText = "Description";
  btnContainer.appendChild(btnDescription);

  btnDescription.addEventListener("click", () => {   /*  evento clik para jalar descripcion al container*/
  containerSection.innerHTML = "";
  containerSection.innerHTML =  `<div class="containerSection_description"><p>${e.description}</p></div>`;
  })

/*************      personajes  - denis   **************/
  const characters = e.people;
  const btnCharacters = document.createElement("button"); /*  boton de personjaes*/
  btnCharacters.classList.add('classbtn')
  btnCharacters.innerText = "Characters";
  btnContainer.appendChild(btnCharacters);

  btnCharacters.addEventListener("click", () => {   /** evento clik para jalar personajes alcontainer */
  containerSection.innerHTML = "";

  const divPersonaje = document.createElement('div'); /*  se crea un div donde ira la foto del personaje y parrafos*/
  divPersonaje.classList.add('divPersonaje')
  containerSection.appendChild(divPersonaje);

  for (let i = 0; i < characters.length; i++) {
    divPersonaje.innerHTML += `
        <div class="movie_img_container"><img class="movie__imgPersonaje" src="${characters[i].img}" alt="Imagen"></div>
        <div class="divPersonaje_container_description">
          <p class="parrafoDirector">Name:"${characters[i].name}"</p>
          <p class="parrafoDirector">Age:"${characters[i].age}"</p>
          <p class="parrafoDirector">Year:"${characters[i].gender}"</p>
          <p class="parrafoDirector">Director:"${characters[i].eye_color}"</p>
          <p class="parrafoDirector">Producer: "${characters[i].hair_color}"</p>
          <p class="parrafoDirector">Producer: "${characters[i].specie}"</p>
        </div>`;
    }

   })
   /*************      locacion y vehiculos - denis  **************/
  const btnLocationVehicle= document.createElement("button");  /** boton de locacion y vehiculos */
  btnLocationVehicle.classList.add('classbtn')
  btnLocationVehicle.innerText = "Location and Vehicle";
  btnContainer.appendChild(btnLocationVehicle);
  let location = e.locations;
  let vehicle = e.vehicles;

  btnLocationVehicle.addEventListener("click", () => {   /** evento clik para locacion y vehiculos */
  containerSection.innerHTML = "";

  if (location.length === 0  && vehicle.length === 0) {
    containerSection.innerHTML = `<img class="movie__img" src=" " alt="Imagen no disponible">`;
  } else {
    for (let i = 0; i < location.length; i++) {
      containerSection.innerHTML += `<img class="movie__img" src="${location[i].img}" alt="imagen de locaciones">
      <p class="parrafoDirector">Climate:"${location[i].climate}"</p>
      <p class="parrafoDirector">Terrain:"${location[i].terrain}"</p>
      <p class="parrafoDirector">Surface Water:"${location[i].surface_water}"</p>`;

  }}
  for (let i = 0; i < vehicle.length; i++) {
    containerSection.innerHTML += `<img class="movie__img" src="${vehicle[i].img}" alt="imagen de vehiculos">
      <p class="parrafoDirector">Description:"${vehicle[i].description}"</p>
      <p class="parrafoDirector">Vehicle Class:"${vehicle[i].vehicle_class}"</p>
      <p class="parrafoDirector">Length:"${vehicle[i].length}"</p>
      <p class="parrafoDirector">Pilot Name:"${vehicle[i].pilot.name}"</p> `;

  }
})
}

/***************** Div para cada pelicula *******************/

   const movie = (dataFilms) => {
    dataFilms.forEach(film => {
      const div = document.createElement('div');
      div.classList.add('subContenedorPelicula');
      div.innerHTML= `<img class="imgDirector"src="${film.poster}" alt="imagen" >
      <p class="titleDirector"> ${film.title}</p>
      <p class="parrafoDirector">Year:"${film.release_date}"</p>
      <p class="parrafoDirector">Director:"${film.director}"</p>
      <p class="parrafoDirector">Producer: "${film.producer}"</p> ` ;

      containerFilms.appendChild(div);

    /*****evento para cada pelicula */
      div.addEventListener("click", () => {
       newContainer(film);
      });
    });
   };
   movie(dataFilms);

  /**--______________________________         Filtrar y Ordenar por Director   y Productor   ________________________________________*/
      const totalEvent = (selectionFilm, filterBy) =>{
      selectionFilm.addEventListener("change", () => {
      const myMoviesDirec =(filterBy(data.films,selectionFilm.value));
      containerFilms.innerHTML = "";
      movie(myMoviesDirec);
                           
      const ordersAz = document.querySelector('.filters-Az');       /*********ordenar director de AZ - ZA  ***** */
      ordersAz.addEventListener('change', (event) =>{
      let ordenar; event.target.value === "A-Z" && selectionFilm.value !=0? ordenar = orderAz(myMoviesDirec):ordenar = orderZa(myMoviesDirec)
      containerFilms.innerHTML = "";
      movie(ordenar);
      })
                 
      const ordersAnRe = document.querySelector('.filters-year');    /*********ordenar director de Antiguo  - Reciente  ***** */
      ordersAnRe.addEventListener('change', (event) =>{
      let ordenarAsc; event.target.value === "Antiguo" && selectionFilm.value !=0? ordenarAsc = sortByAsc(myMoviesDirec):ordenarAsc= sortByDesc(myMoviesDirec)
     containerFilms.innerHTML = "";
     movie(ordenarAsc);
     })
    })
  } 
  totalEvent (filtersDirector, filterByDirector)
  totalEvent (filtersProducer, filterByProducer)

/*_______________funcionalidad de boton graphic ______________*/

buttonGraphic.addEventListener('click', ()=>{
  containerFilms.className ="disabled";
  boxGraphic.className = "enabled";
})
 /*________________ Graficos ___________________*/

const elementMovies = compute(dataFilms);
        let nameBestMovies = elementMovies.map((element) => {
            let titleBestMovies = element.title;
            return titleBestMovies;
        })
        let scoreBestMovies = elementMovies.map((element) => {
            let score = element.rt_score;
            return score;
        })

const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: nameBestMovies,  //eje en X
      datasets: [{
        label: 'score',   //eje en y
        data: scoreBestMovies,
        backgroundColor: [
          "#665191",
          "#a05195",
          "#d45087",
          "#f95d6a",
          "#ff7c43",
          ],
        borderColor: [
          "#665191",
          "#a05195",
          "#d45087",
          "#f95d6a",
          "#ff7c43",
          ],
        borderWidth: 3,
        borderRadius: 1
      }]

        },
        options: {
        scales: {
          y: {
            beginAtZero: true
            }
          }
        }
        })
