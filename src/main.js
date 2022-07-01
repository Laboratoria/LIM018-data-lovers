import data from './data/rickandmorty/rickandmorty.js';
import { filterPersonajes } from  './data.js '

// const selectPersonajes = document.querySelector(".personajes")
// selectPersonajes.addEventListener("change", (event) => {
// // const resultsPersonajes = document.querySelector(".results"); 
// // results.data = event.target.value ;
// const nodePersonajes = document.createElement("div");
// nodePersonajes.innerHTML=personajes.name

// })

// const content = document.getElementById("content")
const personajes = data.results;
console.log (personajes);
//vota la data de las especies
let todoshumanos=document.getElementById("todoshumanos");
function mostrarPersonajes( element){
element.forEach(element => {  
  const nodeEspecie = document.createElement("div");
          // nodeEspecie.innerHTML=personajes[i].name
          nodeEspecie.innerHTML =`<img src="${element.image}"/> <p>${element.name}</p>`;
          todoshumanos.appendChild(nodeEspecie)
});

} 
mostrarPersonajes( filterPersonajes);


for ( let i = 0 ; i < personajes.length ; i++){
    let especies =personajes[i].species;
        // if (especies === 'Human'){
        //   const nodeEspecie = document.createElement("div");
        //   // nodeEspecie.innerHTML=personajes[i].name
        //   nodeEspecie.innerHTML =`<img src="${personajes[i].image}"/> <p>${personajes[i].name}</p>`;

        //   todoshumanos.appendChild(nodeEspecie)
        // }

        if(especies === 'vampiros'){
          const nodeEspecie = document.createElement("div");
        // nodeEspecie.innerHTML=personajes[i].name
        nodeEspecie.innerHTML =`<img src="${personajes[i].image}"/> <p>${personajes[i].name}</p>`;

          todoshumanos.appendChild(nodeEspecie)
        }

        if(especies === 'Alien'){
          const nodeEspecie = document.createElement("div");
        // nodeEspecie.innerHTML=personajes[i].name
        nodeEspecie.innerHTML =`<img src="${personajes[i].image}"/> <p>${personajes[i].name}</p>`;
        todoshumanos.appendChild(nodeEspecie)
          }
      
        if(especies === 'Robot'){
            const nodeEspecie = document.createElement("div");
          // nodeEspecie.innerHTML=personajes[i].name
          nodeEspecie.innerHTML =`<img src="${personajes[i].image}"/> <p>${personajes[i].name}</p>`;
          todoshumanos.appendChild(nodeEspecie)
            }

        if(especies === 'Disease'){
              const nodeEspecie = document.createElement("div");
            // nodeEspecie.innerHTML=personajes[i].name
            nodeEspecie.innerHTML =`<img src="${personajes[i].image}"/> <p>${personajes[i].name}</p>`;
            todoshumanos.appendChild(nodeEspecie)
        }

        if(especies === 'Cronenberg'){
            const nodeEspecie = document.createElement("div");
            // nodeEspecie.innerHTML=personajes[i].name
            nodeEspecie.innerHTML =`<img src="${personajes[i].image}"/> <p>${personajes[i].name}</p>`;
            todoshumanos.appendChild(nodeEspecie)
        }

        if(especies === 'Humanoide'){
          const nodeEspecie = document.createElement("div");
          // nodeEspecie.innerHTML=personajes[i].name
          nodeEspecie.innerHTML =`<img src="${personajes[i].image}"/> <p>${personajes[i].name}</p>`;
          todoshumanos.appendChild(nodeEspecie)
        }

        if(especies === 'Parasite'){
        const nodeEspecie = document.createElement("div");
        // nodeEspecie.innerHTML=personajes[i].name
        nodeEspecie.innerHTML =`<img src="${personajes[i].image}"/> <p>${personajes[i].name}</p>`;
        todoshumanos.appendChild(nodeEspecie)
        }

         if(especies === 'Poopybutthole'){
          const nodeEspecie = document.createElement("div");
          // nodeEspecie.innerHTML=personajes[i].name
          nodeEspecie.innerHTML =`<img src="${personajes[i].image}"/> <p>${personajes[i].name}</p>`;
          todoshumanos.appendChild(nodeEspecie)
        }

         if(especies === 'Mytholog'){
        const nodeEspecie = document.createElement("div");
        // nodeEspecie.innerHTML=personajes[i].name
        nodeEspecie.innerHTML =`<img src="${personajes[i].image}"/> <p>${personajes[i].name}</p>`;
        todoshumanos.appendChild(nodeEspecie)
        }

        if(especies === 'Animal'){
          const nodeEspecie = document.createElement("div");
          // nodeEspecie.innerHTML=personajes[i].name
          nodeEspecie.innerHTML =`<img src="${personajes[i].image}"/> <p>${personajes[i].name}</p>`;
          todoshumanos.appendChild(nodeEspecie)
        }
  }
// todo los ALIENS
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


// selectPersonajes.addEventListener("change", function (event) {
// const opcionSeleccionada = event.target.value
// if (opcionSeleccionada == "ah") {

// //  content.innerHTML = ""
//    nodeEspecie.innerHTML=personajes[i].name
//    opcionSeleccionada.appendChild(selectPersonajes)

// //         // para recorrer arrays
//    personajes.forEach(function (personaje){
            
// personaje.name

//  let html = `<div><h3>${personaje.name}</h3><img src="${personaje.image}" /></div>`
//  content.insertAdjacentHTML("beforeend", html)

            
//         })
//     }

