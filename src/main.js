import {filterByDirector} from './data.js';
//import jsondata from './data/ghibli/ghibli.js';

//mostrar pagina de bienvenida y boton peliculas
const btnpeliculas = document.getElementById("listaPeliculas");
const header = document.getElementById('header');
const contenedorPaginas = document.getElementById('contenedorPaginas');

btnpeliculas.addEventListener("click", () => {
  header.className = "disabled";
  contenedorPaginas.className = "enabled";
 
});


  fetch ('./data/ghibli/ghibli.json')
   .then(response => response.json())
   .then(data => { 
    let containerFilms =document.getElementById('containerFilms');

    data.films.forEach(film => {
  
      containerFilms.innerHTML += `<img src="${film.poster}" alt="imagen" >`;
    });
    
    console.log(data)
   }
   )

   .catch(err =>console.log (err))















