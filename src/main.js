import data from "./data/rickandmorty/rickandmorty.js";
import { filterEspecies } from "./data.js";


// Array de todos los personajes
const personajes = data.results;
console.log(personajes.filter(personaje => ["J","H", "P"].includes(personaje.name.charAt(0))).sort());

//Captura la cajita del div llamado todos humanos
let todoshumanos=document.getElementById("todoshumanos");

// const orderingNames = document.querySelector("#selectPersonajes");
// orderingNames.addEventListener("change", (event) => {
//   todoshumanos.innerHTML = "";
//   const valueSelect = event.target.value;

//   orderingNames(filterEspecies(personajes, valueSelect));
//   function orderingNames(personajes) {
//     personajes.forEach((e) => {
//       const nodePersonaje = document.createElement("div");
//       // nodeEspecie.innerHTML=personajes[i].name
//       nodePersonaje.innerHTML = `<img src="${e.image}"/> <p>${e.name}</p>`;
//       todoshumanos.appendChild(nodePersonaje);
//     });
//   }

// });

           

//select por especies
const selectEspecie = document.querySelector("#selectEspecie");
selectEspecie.addEventListener("change", (event) => {
  todoshumanos.innerHTML = "";
  // te entrega el valor que seleccionaste
  const valueSelect = event.target.value;

  mostrarPersonajes(filterEspecies(personajes, valueSelect));
});

// Creamos una funcion que muestre los personajes
function mostrarPersonajes(personajes) {
  personajes.forEach((element) => {
    const nodeEspecie = document.createElement("div");
    // nodeEspecie.innerHTML=personajes[i].name
    nodeEspecie.innerHTML = `<img src="${element.image}"/> <p>${element.name}</p>`;
    todoshumanos.appendChild(nodeEspecie);
  });
}
