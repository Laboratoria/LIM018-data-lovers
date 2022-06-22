import {filterByDirector} from './data.js';
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
 
});

//***********************************************************
//filtar data por director
const filtersDirector = document.getElementById("filtersDirector");
filtersDirector.addEventListener("change", () => {
  const myMovies =(filterByDirector(data.films,filtersDirector.value))
  myMovies.forEach(film => {
    containerFilms.innerHTML += `<img src="${film.poster}" alt="imagen" >`;
  })
})

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









