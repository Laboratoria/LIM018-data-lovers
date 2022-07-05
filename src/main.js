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
 function mostrarPersonajes (personajes) {
       personajes.forEach(e => {
       const nodeAlfabeto = document.createElement("div");
          nodeAlfabeto.innerHTML =`<img src="${element.image}"/> <p>${element.name}</p>`;
          todoshumanos.appendChild(nodePersonajes)
})

}

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




// const personajes =document.querySelector("#personajes")
// const data = await fetch("../data/rickandmorty/rickandmorty.json")
// const dataJson = await data.json()
// console.log(dataJson.results)

// const seleccion = document.querySelector("#selectPersonajes");

// console.log(seleccion)


// // estamnos ordenando de menoir a mayor
// function ordenar (propiedad) {
//     let sortOrder = 1; 
//     if (propiedad[0] === "-"){
//         sortOrder =-1
//         // substr trae el primer valor que tiene el strring
//         propiedad = propiedad.substr(1)
//     } 
//     return function (a,b) {
//         // operador ternario estudiar
//         let result = (a[propiedad] < b[propiedad]) ? -1 : (a[propiedad] > b[propiedad])? 1 : 0;
//         return result * sortOrder;
//     }
// }
// const filtrarPersonaje = (arr) => {
//   let arreglo =  []
//   const parametro = [...arr].map(e => e.toLowerCase())
//   dataJson.results.forEach(e => {
//     if(parametro.includes(e.name[0].toLowerCase())){
//         arreglo.push(e)
//     }
//   })
//   arreglo = arreglo.sort(ordenar("name"))
//   arreglo.forEach( e => {
//     const {name, image} = e
//     const html = `
//         <div> 
//             <h2> ${name} </h2> 
//             <img src= ${image}>
//         </div> 
//     `
//     personajes.innerHTML += html 
//   })
// }

// filtrarPersonaje("abcdefh")





















