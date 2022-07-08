import data from "./data/rickandmorty/rickandmorty.js";
import { filterEspecies,ordeName,filtrarBuscador,filterid } from "./data.js";


// Array de todos los personajes
const personajes = data.results;

//Captura la cajita del div llamado todos humanos
let todoshumanos=document.getElementById("todoshumanos");

// Creamos una funcion que muestre los personajes
function mostrarPersonajes(personajes) {
  personajes.forEach((element) => {
    const nodeEspecie = document.createElement("div");
    nodeEspecie.setAttribute("id" ,element.id);
    nodeEspecie.addEventListener("click",openModal);
    nodeEspecie.innerHTML = `<img src="${element.image}"/> <p>${element.name}</p>`;
    todoshumanos.appendChild(nodeEspecie);

  });
}

//Filtrando personajes en la cajita busqueda
const buscaNombre = document.querySelector('#buscador');
buscaNombre.addEventListener("keyup",(e) => {
todoshumanos.innerHTML="";
 let resultadoBusqueda= filtrarBuscador(personajes,e.target.value);
  mostrarPersonajes(resultadoBusqueda);
});
// Ordenando alfabeticamente los personajes
const selectPersonajes =document.querySelector("#selectPersonajes");
selectPersonajes.addEventListener("change",(event) => {
 todoshumanos.innerHTML = ""; 
 const valueSelect = event.target.value;
 if (valueSelect=="AZ"){
   mostrarPersonajes(ordeName(personajes));
 }
 else if (valueSelect== "ZA"){
  mostrarPersonajes(ordeName(personajes).reverse()); 
 }
});

//select por especies
const selectEspecie = document.querySelector("#selectEspecie");
selectEspecie.addEventListener("change", (event) => {
  todoshumanos.innerHTML = "";
  // te entrega el valor que seleccionaste
  const valueSelect = event.target.value;

  mostrarPersonajes(filterEspecies(personajes, valueSelect));
});

// ventana modal
let modal = document.getElementById("myModal");

function mostrarModal(personajes) {
  personajes.forEach((element) => {
    const mostrarModal = document.createElement("div");
    mostrarModal.innerHTML= `<img src="${ element.image}"/> <p> Nombre: ${element.name}</p> <p>Estatus: ${element.status} </p> <p>Species: ${element.species} </p> <p>Type: ${element.type} </p> <p>Gender: ${element.gender} </p> 
    <p> Episode: ${element.episode }</p>`;
    modal.appendChild(mostrarModal)
    

  });
}

// Get the moda
function openModal (){
  const traeId = this.id; 
  modal.innerHTML = "";
  modal.style.display = "block";
  
  mostrarModal(filterid(personajes,traeId))
  
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } 
}