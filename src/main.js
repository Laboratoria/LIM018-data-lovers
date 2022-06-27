
import {filterByDirector, filterByProducer, orderAz, orderZa, sortBy} from './data.js';

import data from './data/ghibli/ghibli.js';

//console.log(data)

//************************************************************************************
//mostrar pagina de bienvenida y boton peliculas
const btnpeliculas = document.getElementById("listaPeliculas");
const header = document.getElementById('header');
const contenedorPaginas = document.getElementById('contenedorPaginas');

btnpeliculas.addEventListener("click", () => {
  header.className = "disabled";
  contenedorPaginas.className = "enabled";
  const videoportada = document.getElementById('videoportada');
  videoportada.pause();
});


//******************************************************************************
//llamar data y mostrar catalogo
const containerFilms = document.getElementById('containerFilms');

fetch ('./data/ghibli/ghibli.json')
.then(response => response.json())
.then(data => { 
 let containerFilms =document.getElementById('containerFilms');
 data.films.forEach(film => {
   containerFilms.innerHTML += `<img src="${film.poster}" alt="imagen">`;
 });
})
.catch(err =>console.log (err))

//***********************************************************

const filtersDirector = document.getElementById("filtersDirector");
const filtersProducer = document.getElementById("filtersProducer");


//filtar data por director
filtersDirector.addEventListener("change", () => {
  const myMovies =orderAz(filterByDirector(data.films,filtersDirector.value))
  containerFilms.innerHTML = "";
  myMovies.forEach(film => {
    containerFilms.innerHTML += `<img src="${film.poster}" alt="imagen" >` ;
  })})

//filtar data por productor
filtersProducer.addEventListener("change", () => {
  const myMoviesPro =(filterByProducer(data.films,filtersProducer.value))
  containerFilms.innerHTML = "";
  myMoviesPro.forEach(film => {
    containerFilms.innerHTML += `<img src="${film.poster}" alt="imagen" >`;
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
  containerFilms.innerHTML = "";
  ordenar.forEach(film=>{
    containerFilms.innerHTML += `<img src="${film.poster}" alt="imagen" >`;
  })
})

/****************************** */
//ORDENAR por Año Antiguo-Reciente
const ordersAncd = document.querySelector('.filters-year');
ordersAncd.addEventListener('change', (event) =>{
  let ordenarAsc = ordersAncd.value;
  if (event.target.value === "Antiguo"){
    ordenarAsc = sortBy(data.films)
  }
  else {
    ordenarAsc= sortBy(data.films)
  }
  containerFilms.innerHTML = "";
  ordenarAsc.forEach(film=>{
    containerFilms.innerHTML += `<img src="${film.poster}" alt="imagen" >`;
  })
})