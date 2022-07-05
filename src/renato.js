/*import { filterDataDirector} from './data.js';
//import jsondata from './data/ghibli/ghibli.js';

// jalondo la data del json
const api = await fetch("ghibli.json");
const data = await api.json();
const estudio = data.studio;
//
const titulo= document.querySelector('.titulo')
titulo.innerHTML = `<i>${estudio}</i>`

const contenedor= document.querySelector('.contenedor');

let director = document.querySelector('#filtersDirector');
console.log(director)
director.addEventListener('change', () => {
let selectionOption = director.options[director.selectedIndex]

const datadirector = filterDataDirector(data.films,selectionOption.value)

contenedor.innerHTML=null;
datadirector.forEach(e => {
const {poster,title,director,producer,release_date,rt_score} = e;
let card = `<div class="card">
    <img src="${poster}" alt="" />
    <div>
      <h4 class="titulo">${title}</h4>
      <p class="anio">${release_date}</p>
      <p class="director">${director}</p>
      <p class="productor">${producer}</p>
      <p class="score">${rt_score}</p>
    </div>
  </div>
`
contenedor.innerHTML+=card

//cards+=card;
});
//contenedor.innerHTML=cards




console.log(datadirector)
})*/


/********************************************************************* */


/*//ORDENAR DE  A a la z

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
    containerFilms.innerHTML += `<div class = "subContenedorDirector">
    <img class="imgDirector"src="${film.poster}" alt="imagen" >  <div class = "directorDescripcion">
    <p class="titleDirector"> ${film.title}</p>
    <p class="parrafoDirector">Año:"${film.release_date}"</p>
    <p class="parrafoDirector">Director:"${film.director}"</p>
    <p class="parrafoDirector">Productor: "${film.producer}"</p>
    </div>
    </div> ` ;
  })
})*/

//ORDENAR por Año Antiguo-Reciente****************************************
/*const ordersAnRe = document.querySelector('.filters-year');
ordersAnRe.addEventListener('change', (event) =>{
  let ordenarAsc;
  if (event.target.value === "Antiguo"){
    ordenarAsc = sortByAsc(data.films)
  }
  else {
    ordenarAsc= sortByDesc(data.films)
  }
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
})*/



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
