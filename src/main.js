import {filterByDirector, orderAz, orderZa} from './data.js';
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
//filtar data por director
const filtersDirector = document.getElementById("filtersDirector");

filtersDirector.addEventListener("change", () => {
  const myMovies =orderAz(filterByDirector(data.films,filtersDirector.value))
  containerFilms.innerHTML = "";
  myMovies.forEach(film => {
    containerFilms.innerHTML += `<img src="${film.poster}" alt="imagen" > <p> "${film.title}"</p>
    <p>Año: "${film.release_date}"</p> <p>Director: "${film.director}"</p> <p>Productor: "${film.producer}"</p> ` ;

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

/****************************** *
//ORDENAR DE  Z A LA A

const ordersZa = document.querySelector('.filters-Az');

ordersZa.addEventListener('change', () =>{

  const ordenar2 = (orderAz(data.films,ordersZa.value))

  ordenar2.forEach(film=>{
    containerFilms.innerHTML += `<img src="${film.poster}" alt="imagen" >`;
  })
})*/
