
import {filterByDirector, filterByProducer, orderAz, orderZa, sortByAsc, sortByDesc, filtredFilm, compute } from './data.js';

import data from './data/ghibli/ghibli.js';


//************************************************************************************
//mostrar pagina de bienvenida y boton peliculas
const todoFilm= data.films

const btnpeliculas = document.getElementById("listaPeliculas");
const header = document.getElementById('header');
const contenedorPaginas = document.getElementById("contenedorPaginas");
const btnhome = document.getElementById("home");
const containerFilms = document.getElementById('containerFilms');
const descripcionPersonaje =document.getElementById('descripcion');
const buttonGraphic = document.getElementById('buttonGraphic')
const boxGraphic = document.getElementById('box_graphic')
const footerr = document.getElementById('footer')

header.className = "enabled";

btnpeliculas.addEventListener("click", () => {
  header.className = "disabled";
  contenedorPaginas.className = "enabled";
  footerr.className = "enabled";
  containerFilms.innerHTML = "";
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
  boxGraphic.style.display = 'none';
  contenedorPaginas.className = 'disabled';
  cajaFiltrado(todoFilm)
});
/*------------------------------- BOTON DE GRAFICOS--------------------------- */

buttonGraphic.addEventListener('click', ()=>{
  containerFilms.className = "disabled";
  boxGraphic.className = "enabled";
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

    const cajapersonajes= document.getElementById(films[i].id);

    cajapersonajes.addEventListener('click',(e)=>{
      //console.log(e)
      console.log(cajapersonajes.value)
      const descripcionBox = filtredFilm(todoFilm,cajapersonajes.value);
        descripcionPersonaje.innerHTML = "";
        descripcionBox.forEach(console.log(alert("pruebaa")));
        //filtradoPersonajes(descripcionBox)
        //descripcionBox.map( function(){
         // console.log(alert("hola"))};
     } );

  }

};
/* INTENTOS DE CAJA FILTRADOO SEGUNDA PARTE __________ NO BORRAR*/
/*const filtradoPersonajes = (films) =>{
  for ( let i = 0 ; i < films.length; ++i){
    document.querySelector(".descripcion").innerHTML +=
    `<div class = "subContenedorPersonaje">
       <div id="${films[i].id}" class="containerImgPersonaje">
         <img class="imgPersonaje" src="${films[i].poster}">
         <div class = "PersonajeDescripcion">
           <p class="titlePersonaje">${films[i].title}</p>
           <p class="parrafoPersonaje">Director: ${films[i].director}</p>
           <p class="parrafoPersonajer">Producer: ${films[i].producer}</p>
           <p class="parrafoDirector">Year: ${films[i].release_date}</p>
         </div>
       </div>
     </div>`;
  }}*/
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
//ORDENAR DE  A a la z*********************************************
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

// graficoss*****************
const elementMovies = compute(data.films);

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
});*/


//******************************************************************************
/*******************  FUNCIONALIDAD DEL BOTON BUSCAR  *********************/


//Traemos a la barra de búsqueda
/*let searchBar = document.querySelector('#inputSearch');

Que la barra busque los pokémon al escribir
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


/*-------------OPCIONNA ARKELY-----------------*/
//searchInput.addEventListener('input', () => {
 // const inputValue = searchInput.value.toLowerCase();
//  const result =pokeSearch(allPokemon, inputValue);
//export const pokeSearch = (allPokemon,name) => {
 // let searchPokeName=allPokemon.filter(function(pokemon) {
 //   return pokemon.name.startsWith(name);
//
 // return searchPokeName;vvvvvv
