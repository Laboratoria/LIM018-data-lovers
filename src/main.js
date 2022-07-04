import data from './data/rickandmorty/rickandmorty.js';
import { filterEspecies } from  './data.js '

import {filtrarPersonajes} from './data.js'
 
// Array de todos los personajes
const personajes = data.results;

//Captura la cajita del div llamado todos humanos
let todoshumanos=document.getElementById("todoshumanos");

const orderingNames = document.querySelector("#selectPersonajes");
orderingNames.addEventListener("change", (event) => {
 todoshumanos.innerHTML="";
 const valueSelect = event.target.value;
 mostrarPersonajes(filtrarPersonajes(personajes,valueSelect));
 



})

//select por especies
const selectEspecie = document.querySelector("#selectEspecie")
selectEspecie.addEventListener("change", (event) => {   
todoshumanos.innerHTML="";
// te entrega el valor que seleccionaste
const valueSelect=  event.target.value;

mostrarPersonajes(filterEspecies(personajes,valueSelect));


})

// Creamos una funcion que muestre los personajes
 function mostrarPersonajes(personajes){
  personajes.forEach(element => {  
   const nodeEspecie = document.createElement("div");
          // nodeEspecie.innerHTML=personajes[i].name
          nodeEspecie.innerHTML =`<img src="${element.image}"/> <p>${element.name}</p>`;
          todoshumanos.appendChild(nodeEspecie)
});
} 


























