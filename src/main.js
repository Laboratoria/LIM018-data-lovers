
import {filterByDirector, filterByProducer, orderAz, orderZa, sortByAsc, sortByDesc} from './data.js';

import data from './data/ghibli/ghibli.js';


//************************************************************************************
//mostrar pagina de bienvenida y boton peliculas
const btnpeliculas = document.getElementById("listaPeliculas");
const header = document.getElementById('header');
const contenedorPaginas = document.getElementById('contenedorPaginas');
const btnhome = document.getElementById("home");
const containerhome = document.getElementById('containerhome')

btnpeliculas.addEventListener("click", () => {
  header.className = "disabled";
  contenedorPaginas.className = "enabled";
  const videoportada = document.getElementById('videoportada');
  videoportada.pause();
});

btnhome.addEventListener("click", () => {
  header.className = "enabled";
  contenedorPaginas.className = "disabled";
  const videoportada = document.getElementById('videoportada');
  videoportada.play();
});

/******   CREACIÓN DE CARD PARA CADA POSTER***** */

/*const contenedorFilm = (films) =>{

  for ( let i = 0 ; i < films.length; ++i){
    document.querySelector(".container-films").innerHTML += `<div class="subContainerFilms">
    <div id="${data[i].id}" class="containerImg">
        <img src="${data[i].poster}">
        <div class="descrpcion">
        <p>${data[i].title}</p>
        <p>${data[i].director}</p>
        <p>${data[i].producer}</p>
        <p>${data[i].release_date}</p>
        </div>
        </div>
        </div>`;
  }

  document.querySelectorAll('.containerImg').forEach(item => {
    item.addEventListener('click', () => {
        let film_id = item.id;
        modalDisplay(film_id);
    })
});
};*/

//******************************************************************************
//llamar data y mostrar catalogo
const containerFilms = document.getElementById('containerFilms');

fetch ('./data/ghibli/ghibli.json')
.then(response => response.json())
.then(data => {
 let containerFilms =document.getElementById('.containerFilms');
 data.films.forEach(film => {
   containerFilms.innerHTML += `<img src="${film.poster}" alt="imagen">`;
 });
})
.catch(err =>console.log (err))

//***********************************************************
const filtersDirector = document.getElementById("filtersDirector");
const filtersProducer = document.getElementById("filtersProducer");
//filtar data por director****************************************
filtersDirector.addEventListener("change", () => {
  const myMovies =orderAz(filterByDirector(data.films,filtersDirector.value))
  containerhome.className = "disabled";
  containerFilms.innerHTML = "";
  myMovies.forEach(film => {
    containerFilms.innerHTML += `<div class = "subContenedorDirector">
    <img class="imgDirector"src="${film.poster}" alt="imagen" >  <div class = "directorDescripcion">
    <p class="titleDirector"> ${film.title}</p>
    <p class="parrafoDirector">Año:"${film.release_date}"</p>
    <p class="parrafoDirector">Director:"${film.director}"</p>
    <p class="parrafoDirector">Productor: "${film.producer}"</p>
    </div>
    </div> ` ;
  })})
//filtar data por productor*****************************************
filtersProducer.addEventListener("change", () => {
  const myMoviesPro =(filterByProducer(data.films,filtersProducer.value))
  containerhome.className = "disabled";
  containerFilms.innerHTML = "";
  myMoviesPro.forEach(film => {
    containerFilms.innerHTML += `<div class = "subContenedorDirector">
    <img class="imgDirector"src="${film.poster}" alt="imagen" >  <div class = "directorDescripcion">
    <p class="titleDirector"> ${film.title}</p>
    <p class="parrafoDirector">Año:"${film.release_date}"</p>
    <p class="parrafoDirector">Director:"${film.director}"</p>
    <p class="parrafoDirector">Productor: "${film.producer}"</p>
    </div>
    </div> ` ;
  })})

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
  containerhome.className = "disabled";
  containerFilms.innerHTML = "";
  ordenar.forEach(film=>{
    containerFilms.innerHTML += `<div class = "subContenedorDirector">
    <img class="imgDirector"src="${film.poster}" alt="imagen" >  <div class = "directorDescripcion">
    <p class="titleDirector"> ${film.title}</p>
    <p class="parrafoDirector">Año:"${film.release_date}"</p>
    <p class="parrafoDirector">Director:"${film.director}"</p>
    <p class="parrafoDirector">Productor: "${film.producer}"</p>
    </div>
    </div> ` ;
  })
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
  containerhome.className = "disabled";
  containerFilms.innerHTML = "";
  ordenarAsc.forEach(film=>{
    containerFilms.innerHTML += `<div class = "subContenedorDirector">
    <img class="imgDirector"src="${film.poster}" alt="imagen" >  <div class = "directorDescripcion">
    <p class="titleDirector"> ${film.title}</p>
    <p class="parrafoDirector">Año:"${film.release_date}"</p>
    <p class="parrafoDirector">Director:"${film.director}"</p>
    <p class="parrafoDirector">Productor: "${film.producer}"</p>
    </div>
    </div> ` ;
  })
})
