
import {filterByDirector, filterByProducer, orderAz, orderZa} from './data.js';

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

fetch ('./data/ghibli/ghibli.json')
.then(response => response.json())
.then(data => { 
 let containerFilms =document.getElementById('containerFilms');
 data.films.forEach(film => {
   containerFilms.innerHTML += `<img src="${film.poster}" alt="imagen" >`;
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
    containerFilms.innerHTML += `<img src="${film.poster}" alt="imagen" > <p> "${film.title}"</p>
    <p>Año: "${film.release_date}"</p> <p>Director: "${film.director}"</p> <p>Productor: "${film.producer}"</p> ` ;
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


