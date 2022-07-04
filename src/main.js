//import { example } from './data.js';

import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
import {ordenarAscendente} from "./data.js";
import {ordenarDescendente} from "./data.js";

let containerPokemon = document.getElementById("containerPokemon");
//let formBuscarPokemon = document.getElementById("buscarPokemon");
let ordenAscend = document.getElementById("ordenAscend");
let ordenDescen = document.getElementById("ordenDescen");
let searchPokemon = document.getElementById("searchPokemon")
let btnSearch = document.getElementById("bntSearch")

//mostrar pokemon
for(let i=0; i< data.pokemon.length; i++ ){
   createPokeCard(data.pokemon[i]);
}

function createPokeCard (pokemon){
   let card=document.createElement("div");
   card.classList.add("card-pokemon");

   let imgContent = document.createElement("div");
   imgContent.classList.add("img-content");

   let imgPokemon = document.createElement("img");
   imgPokemon.src = pokemon.img;
   
 
   imgContent.appendChild(imgPokemon);

   let number = document.createElement("p");
   number.classList.add("numberPokemon");
   number.textContent = "#" + pokemon.num;

   let name = document.createElement("p");
   name.classList.add("namePokemon");
   name.textContent = pokemon.name
   
   let type = document.createElement("p");
   type.classList.add("typePokemon");
   type.textContent = pokemon.type;

   card.appendChild(imgContent);
   card.appendChild(number);
   card.appendChild(name);
   card.appendChild(type);

   containerPokemon.appendChild(card);
}

//Ordenar pokemon
ordenAscend.addEventListener("click", e =>{
   e.preventDefault();
   
  
   let ord = ordenarAscendente(data.pokemon); 

   document.getElementById('containerPokemon').innerHTML = '';
   
   for(let i=0; i< ord.length; i++ ){
      createPokeCard(ord[i]);
   } 

})
ordenDescen.addEventListener("click", e =>{
   e.preventDefault();

   
   let ordDes = ordenarDescendente(data.pokemon);
   document.getElementById('containerPokemon').innerHTML = '';

   for(let i=0; i< ordDes.length; i++ ){
      createPokeCard(ordDes[i]);
   } 

})
//Buscar pokemon

let search = function(data) {
   containerPokemon.innerHTML = " ";

   let inputSearch = searchPokemon.value.toLowerCase();
   for (let i = 0; i< data.length; i++) {

      
      
   }
}







// creartePokemon(data.pokemon[0]);  (referencia)
// let pokemon =fetch("./data/pokemon/pokemon.json")
// .then(response => {
//    return response.json();
// })
// .then(pokemon => console.log(pokemon.pokemon[0]));
 
// let showPokemon = async()=>{
//  for(let i =1; i<=pokemonNumber; i++){
//     await pokemon(i); 
// }