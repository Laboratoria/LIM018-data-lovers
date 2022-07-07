
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
const buttonGraphic = document.getElementById('buttonGraphic');
const boxGraphic = document.getElementById('box_graphic');

/*----------------------------- CLIK PARA EL BOTON GO DEL VIDEO ****************************/
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
let todoFilms = document.createElement("section");
todoFilms.classList.add('todoFilms'); 
containerFilms.appendChild(todoFilms);

  let sectionInfoFilms = document.createElement("section");
  sectionInfoFilms.classList.add('sectionInfoFilms'); /** pelicula ** */
  todoFilms.appendChild(sectionInfoFilms);

  let sectionFilm = document.createElement("section");
  sectionFilm.classList.add('movie__section'); /** pelicula ** */
  todoFilms.appendChild(sectionFilm);

  sectionFilm.innerHTML =`<h3>${e.title}</h3>
  <img class="imgDirector"src="${e.poster}" alt="imagen" >  
  <p class="titleDirector"> ${e.title}</p>
  <p class="parrafoDirector">Year:"${e.release_date}"</p>
  <p class="parrafoDirector">Director:"${e.director}"</p>
  <p class="parrafoDirector">Producer: "${e.producer}"</p>` ;
  
  let btnReturn = document.createElement("button"); /* boton para retornar a listado de peliculas */
  btnReturn.classList.add('classbtn'); 
  sectionFilm.appendChild(btnReturn);
  btnReturn.innerText = "Return";

  btnReturn.addEventListener("click", () => {
  containerFilms.innerHTML = "";
  movie(dataFilms);
  })

  /****************************************/
  let btnContainer = document.createElement("section");/******container para botones : descripciojn, personajes, locacion y vehiculos*/
  btnContainer.classList.add('btnContainer'); 
  sectionInfoFilms.appendChild(btnContainer);

  let containerSection= document.createElement("section"); /** section donde ira decricopin y las imagenes de los personajes */
  containerSection.classList.add('containerSection'); 
  sectionInfoFilms.appendChild(containerSection);

  /*************      descripcion   - denis  **************/
  const btnDescription = document.createElement("button"); /**   se crea botnes dentro del contenedor de botones*/
  btnDescription.classList.add('classbtn')
  btnDescription.innerText = "Description";
  btnContainer.appendChild(btnDescription);

  btnDescription.addEventListener("click", () => {   /*  evento clik para jalar descripcion al container*/
  containerSection.innerHTML = "";
  containerSection.innerHTML =  `<p>${e.description}</p>`;
  })
  
/*************      personajes  - denis   **************/
  const characters = e.people;
  const btnCharacters = document.createElement("button"); /*  boton de personjaes*/
  btnCharacters.classList.add('classbtn')
  btnCharacters.innerText = "Characters";
  btnContainer.appendChild(btnCharacters);

  btnCharacters.addEventListener("click", () => {   /** evento clik para jalar personajes alcontainer */
  containerSection.innerHTML = "";
  
  const divImag = document.createElement('div'); /*  se crea un div donde ira la foto del personaje y parrafos*/
  divImag.classList.add('divImag')
  containerSection.appendChild(divImag);
  
  for (let i = 0; i < characters.length; i++) {
    divImag.innerHTML += `<img class="movie__img" src="${characters[i].img}" alt="Imagen">
      <p class="parrafoDirector">Name:"${characters[i].name}"</p>
      <p class="parrafoDirector">Age:"${characters[i].age}"</p>
      <p class="parrafoDirector">Year:"${characters[i].gender}"</p>
      <p class="parrafoDirector">Director:"${characters[i].eye_color}"</p>
      <p class="parrafoDirector">Producer: "${characters[i].hair_color}"</p> 
      <p class="parrafoDirector">Producer: "${characters[i].specie}"</p> `;
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
      divImag.innerHTML += `<img class="movie__img" src="${location[i].img}" alt="imagen de locaciones">
      <p class="parrafoDirector">Climate:"${location[i].climate}"</p>
      <p class="parrafoDirector">Terrain:"${location[i].terrain}"</p>
      <p class="parrafoDirector">Surface Water:"${location[i].surface_water}"</p>`;

  }}
  for (let i = 0; i < vehicle.length; i++) {
    divImag.innerHTML += `<img class="movie__img" src="${vehicle[i].img}" alt="imagen de vehiculos">
      <p class="parrafoDirector">Description:"${vehicle[i].description}"</p>
      <p class="parrafoDirector">Vehicle Class:"${vehicle[i].vehicle_class}"</p>
      <p class="parrafoDirector">Length:"${vehicle[i].length}"</p>
      <p class="parrafoDirector">Pilot Name:"${vehicle[i].pilot.name}"</p> `;

  }
})
}


/******************************************************        Div para cada pelicula          ***********************************************/

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
   
   /**************Filtrar por Director******/
   filtersDirector.addEventListener("change", () => {
    const myMoviesDirec =(filterByDirector(data.films,filtersDirector.value));
    containerFilms.innerHTML = "";
    movie(myMoviesDirec);
    }),
    
    /**************Filtrar por Productor******/
   filtersProducer.addEventListener("change", () => {
    const myMoviesPro =(filterByProducer(data.films,filtersProducer.value));
    containerFilms.innerHTML = "";
    movie(myMoviesPro);
    });
    
    /*******Ordenar A-Z********** */ 
   const ordersAz = document.querySelector('.filters-Az');
   ordersAz.addEventListener('change', (event) =>{
   let ordenar;
   if (event.target.value === "A-Z"){
    ordenar = orderAz(data.films)
   }
   else {
    ordenar= orderZa(data.films)
   }
   containerFilms.innerHTML = "";
   movie(ordenar);
   });

/*******Ordenar Antiguo - Reciente ********** */
const ordersAnRe = document.querySelector('.filters-year');
ordersAnRe.addEventListener('change', (event) =>{
  let ordenarAsc;
  if (event.target.value === "Antiguo"){
    ordenarAsc = sortByAsc(data.films)
  }
  else {
    ordenarAsc= sortByDesc(data.films)
  }
  containerFilms.innerHTML = "";
  movie(ordenarAsc);
 })




/*---------------------------------------------------------- BOTON DE GRAFICOS----------------------------------------------------------- */


buttonGraphic.addEventListener('click', ()=>{
  containerFilms.innerHTML = "";
  boxGraphic.className = "enabled";
});

/***graficoss*****************/
const elementMovies = compute(dataFilms);

let nameBestMovies = elementMovies.map((elem)=>{
  let titleBestMovies = elem.title;
  return titleBestMovies;
})

let scoreBestMovies = elementMovies.map((elem)=>{
  let score = elem.rt_score;
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
