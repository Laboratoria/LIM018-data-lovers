import { films } from './data.js';
import data from './data/ghibli/ghibli.js';
// console.log(films, data);

//JALANDO DATA DESDE J.SON

// let dataFilms;
// fetch('./data/ghibli/ghibli.json')
// .then(studio => studio.json())
// .then(data=>{
//   dataFilms = data.films;

const ghibli = data
// // console.log(ghibli)

const dataFilms = ghibli.films
// // console.log(dataFilms)

const posters = dataFilms.map(dataFilms => (dataFilms.poster));
// console.log(posters)

const filmCards = document.getElementById("filmCards") 

posters.forEach(poster => {
filmCards.innerHTML+= `<img src="${poster}" alt="imagen">`
})

// })
