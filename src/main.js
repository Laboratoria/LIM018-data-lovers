import data from './data/rickandmorty/rickandmorty.js';
import { filterEspecies } from  './data.js '

// Array de todos los personajes
const personajes = data.results;

//Captura la cajita del div llamado todos humanos
let todoshumanos=document.getElementById("todoshumanos");

//select por especies
const selectEspecies = document.querySelector("#selectEspecie")
selectEspecies.addEventListener("change", (event) => {

todoshumanos.innerHTML="";
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


























