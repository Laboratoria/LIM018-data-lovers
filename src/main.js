import data from './data/rickandmorty/rickandmorty.js';

const buscador = document.getElementById("buscador");
const selectPersonajes = document.getElementById("selectPersonajes");
const selectEspecie = document.getElementById("selectEspecie");
// const content = document.getElementById("content")
const personajes = data.results;

//vota la data de los humanos
// let todoshumanos=document.getElementById("todoshumanos");
// for ( let i = 0 ; i < personajes.length ; i++){
//     let especies =personajes[i].species;
//         if (especies === 'Human'){
//           const nodeEspecie = document.createElement("div");
//           // nodeEspecie.innerHTML=personajes[i].name
//           nodeEspecie.innerHTML =`<img src="${personajes[i].image}"/> <p>${personajes[i].name}</p>`;

//           todoshumanos.appendChild(nodeEspecie)
                  
//         }
  
//   }
  // for ( let i = 0 ; i < personajes.length ; i++){
  //   let especies =personajes[i].species;
  //   console.log(personajes[i].species);
  // }

// ----------------------------------------------------------------
// change nos regala informacion
// cuando sucede algo
// y es gratis.......
// te la manda en forma de regalito, como argumento!!!!
// el regalo es :ooooooo
// la informacion de lo que suecede en el evento


selectPersonajes.addEventListener("change", function (event) {
const opcionSeleccionada = event.target.value
if (opcionSeleccionada == "ah") {

//  content.innerHTML = ""
   nodeEspecie.innerHTML=personajes[i].name
   opcionSeleccionada.appendChild(selectPersonajes)

//         // para recorrer arrays
   personajes.forEach(function (personaje){
            
personaje.name

 let html = `<div><h3>${personaje.name}</h3><img src="${personaje.image}" /></div>`
 content.insertAdjacentHTML("beforeend", html)

            
        })
    }

})