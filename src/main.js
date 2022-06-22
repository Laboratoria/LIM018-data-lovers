import { filterByDirector} from './data.js';

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


const portada = document.querySelector('.header-h');
const botonPeliculas = document.querySelector('.lista-peliculas');
const containerFilms = document.querySelector('.contenedor-paginas');

const verpeliculas = () =>{
  portada.style.display = "none";
  containerFilms.style.display = "block";
}
botonPeliculas.addEventListener('click', verpeliculas);
