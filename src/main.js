//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
import {filterData, sortData} from './data.js';


console.log(filterData(data.pokemon, '7 km'))
console.log(sortData(data.pokemon, filterData, 'asc'))

//console.log(example, data);