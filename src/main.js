
import {filterByDirector, filterByProducer, orderAz, orderZa, searchData, sortByAsc, sortByDesc} from './data.js';

import data from './data/ghibli/ghibli.js';


//************************************************************************************
//mostrar pagina de bienvenida y boton peliculas
const todoFilm= data.films

const btnpeliculas = document.getElementById("listaPeliculas");
const header = document.getElementById('header');
const contenedorPaginas = document.getElementById("contenedorPaginas");
const btnhome = document.getElementById("home");
const containerFilms = document.getElementById('containerFilms')

header.className = "enabled";

btnpeliculas.addEventListener("click", () => {
  header.className = "disabled";
  contenedorPaginas.className = "enabled";
  const videoportada = document.getElementById('videoportada');
  videoportada.pause();
 cajaFiltrado(todoFilm)
  /*fetch ('./data/ghibli/ghibli.json')
 .then(response => response.json())
 .then(data => {
 let containerFilms =document.getElementById('containerFilms');
 data.films.forEach(film => {
   containerFilms.innerHTML +=  `<div class = "subContenedorDirector">
   <img class="imgDirector"src="${film.poster}" alt="imagen" >  <div class = "directorDescripcion">
   <p class="titleDirector"> ${film.title}</p>
   <p class="parrafoDirector">Año:"${film.release_date}"</p>
   <p class="parrafoDirector">Director:"${film.director}"</p>
   <p class="parrafoDirector">Productor: "${film.producer}"</p>
   </div>
   </div> ` ;
 });
}).catch(err =>console.log (err))*/
});

btnhome.addEventListener("click", () => {
  header.className = "enabled";
  contenedorPaginas.className = "disabled";
  const videoportada = document.getElementById('videoportada');
  videoportada.play();
});
//******************************************************************************
/******   CREACIÓN DE CARD PARA CADA POSTER***** */

const cajaFiltrado = (films) =>{

  for ( let i = 0 ; i < films.length; ++i){

    document.querySelector(".container-films").innerHTML +=
     `<div class = "subContenedorDirector">
        <div id="${films[i].id}" class="containerImg">
          <img class="imgDirector" src="${films[i].poster}">
          <div class = "directorDescripcion">
            <p class="titleDirector">${films[i].title}</p>
            <p class="parrafoDirector">Director: ${films[i].director}</p>
            <p class="parrafoDirector">Producer: ${films[i].producer}</p>
            <p class="parrafoDirector">Year: ${films[i].release_date}</p>
          </div>
        </div>
      </div>`;
  }
};

//***********************************************************
const filtersDirector = document.getElementById("filtersDirector");
const filtersProducer = document.getElementById("filtersProducer");

//filtar data por director****************************************
filtersDirector.addEventListener("change", () => {
  const myMovies =orderAz(filterByDirector(data.films,filtersDirector.value))
  containerFilms.innerHTML = "";
  cajaFiltrado(myMovies);
})
//filtar data por productor*****************************************
filtersProducer.addEventListener("change", () => {
  const myMoviesPro =(filterByProducer(data.films,filtersProducer.value))
  containerFilms.innerHTML = "";
  cajaFiltrado(myMoviesPro);
  })

/****************************** */
//ORDENAR DE  A a la z

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
  cajaFiltrado(ordenar)
})

//ORDENAR por Año Antiguo-Reciente****************************************
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
  cajaFiltrado(ordenarAsc)
})

//******************************************************************************
/*******************  FUNCIONALIDAD DEL BOTON BUSCAR  *********************/


//Traemos a la barra de búsqueda
//let searchBar = document.querySelector('#inputSearch');

//Que la barra busque los pokémon al escribir
/*searchBar.addEventListener("input", function (e) {
  let searchingBar = e.target.value;
  const searchedData = searchData(data.films, searchingBar);
  if (searchedData.length === 0) {
    alert("Sorry trainer, Pokemon doesn't exist");
  } else {
    cajaFiltrado(searchedData);
  }
});


//******************************************************************************
/*******************  FUNCIONALIDAD DEL BOTON BUSCAR  *********************/


//Traemos a la barra de búsqueda
/*let searchBar = document.querySelector('#inputSearch');

//Que la barra busque los pokémon al escribir
searchBar.addEventListener("input", function (e) {
  let searchingBar = e.target.value;
  const searchedData = searchData(data.films, searchingBar);
  if (searchedData.length === 0) {
    alert("Sorry trainer, Pokemon doesn't exist");
  } else {
    cajaFiltrado(searchedData);
  }
});*/

/*btnBuscar.onclick = function(films){
  const imputSearch = document.getElementById('inputSearch').value;
  if (imputSearch == 'hola' ){
    cajaFiltrado()
  }
}*/
