import {  } from './data.js';
//import ghibli from './data/ghibli/ghibli.js';

//console.log(fetch('https://ghibliapi.herokuapp.com/films'));
let dataFilms;
fetch('./data/ghibli/ghibli.json')
.then(studio => studio.json())
.then(data=>{
  dataFilms = data.films;
 
  const posters = dataFilms.map(dataFilms => (dataFilms.poster));
  const filmsCards = document.getElementById('filmsCards')
  posters.forEach(poster => {
    filmsCards.innerHTML += `<img src="${poster}" alt="imagen">`

   console.log(posters);
  });
})
.catch(err => console.log(err))








    





// const filmCards document.querySelector('.film-cards');
// filmCards.innerHTML+= `<img src
// let posterFilms = dataFilms.map(posterFilms => dataFilms.poster);
// console.log(posterFilms);

//   //Mostrar todos los posters de los films de Ghibli

//   function loadPosterFilms() {
//     for(let i = 0; i < posterFilms.length; i++) {
//       let img = document.createElement("img");
//       img.src = posterFilms[i];
//       img.id = "ghibliFilms";
//       img.classList.add("classModalImage");
     
//       document.getElementById("containerPosterFilms").appendChild(img);
//   }
 
// }
// console.log(loadPosterFilms()); //cargar los posters de los films de Ghibli

  

