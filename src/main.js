/*
import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);


*/

import {filterByDirector} from './data.js';
import data from "./data/ghibli/ghibli.js";
const containerFilms = document.getElementById("containerFilms");


    
// Filtrado de películas por director
const selectDirectors = document.getElementById("filtersDirector");
selectDirectors.addEventListener("change", () => {
  let directors = selectDirectors.value;
  containerFilms(filterByDirector(data, directors));
  
})
