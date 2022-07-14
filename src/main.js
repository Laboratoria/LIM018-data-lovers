import data from "./data/rickandmorty/rickandmorty.js";
import { filterEspecies,ordeName,filtrarBuscador,filterid} from "./data.js";


// Array de todos los personajes
const personajes = data.results;

//Captura la cajita del div llamado todos humanos
let todoshumanos=document.getElementById("todoshumanos");

// Creamos una funcion que muestre los personajes
function mostrarPersonajes(personajes) {
  let slido= document.getElementsByClassName("pagelido");
  console.log(slido);
 slido[0].style.display = "none";
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
    mostrarModal.innerHTML= ` <div class=imgModal> <img src="${ element.image}"/> <div class= edit > <p> Nombre: ${element.name}</p> <p>Estatus: ${element.status} </p> <p>Species: ${element.species} </p> <p>Type: ${element.type} </p> <p>Gender: ${element.gender} </p> 
    <p> Episode: ${element.episode }</p>`; 
    modal.appendChild(mostrarModal)
    
  });
}

// Get the moda
function openModal (event){
  const traeId = this.id; 
  modal.innerHTML = "";
  modal.style.display = "block";
  
  mostrarModal(filterid(personajes,traeId))
  event.stopPropagation()
  console.log("funcionopewnmodal");
}

window.onclick = function(event) {
  console.log("cerrar",event,modal.style.display);
  // if (event.target == modal) {
    if(modal.style.display=="block"){
      modal.style.display = "none";
    }
  // } 
}


// datos estadisticos

const mostrarEstadisticas = document.querySelector("#selectDatosEs");
mostrarEstadisticas.addEventListener("click", (event) => {
  todoshumanos.innerHTML = "";
  // te entrega el valor que seleccionaste
  // const valueSelect = event.target.value;
// agregamos la linea de codigo para mostrar el mensaje de porcentajes cuando se haga click
// let humanos = filterEspecies(personajes, "Human").length;
// let alien = filterEspecies(personajes, "Alien").length;
// let vampire = filterEspecies(personajes, "Vampire").length;
// let humanoid = filterEspecies(personajes,"Humanoid").length;
// let robot = filterEspecies(personajes, "Robot").length;
// let Animal = filterEspecies(personajes,"Animal").length;


// //Cantidad de personajes por especie
// let porcentageHuman = computeStats(personajes.length, humanos);
// let porcentageAlien = computeStats(personajes.length, alien);
// let porcentageVampire = computeStats(personajes.length, vampire);
// let porcentageHuamanoid = computeStats(personajes.length, humanoid);
// let porcentageRobot = computeStats(personajes.length, robot);
// console.log(porcentageHuman,porcentageAlien,porcentageVampire,porcentageHuamanoid,porcentageRobot);

let modal = document.getElementById("#selectDatosEs");
modal.innerHTML = "";
const creadiv = document.createElement("div");
creadiv.innerHTML= `<div class2= edit > <p>"total de personajes : 493" </p>  `; 
modal.appendChild(creadiv)

modal.style.display = "block";
event.stopPropagation()
 
// console.log(humano,alien,vampire,humanoid,robot,Animal);
});

