import data from './data/rickandmorty/rickandmorty.js';

const buscador = document.getElementById("buscador")
const content = document.getElementById("content")
const selectPersonajes = document.getElementById("selectPersonajes")

const personajes = data.results

// change nos regala informacion
// cuando sucede algo
// y es gratis.......
// te la manda en forma de regalito, como argumento!!!!
// el regalo es :ooooooo
// la informacion de lo que suecede en el evento
selectPersonajes.addEventListener("change", function (event) {
    const opcionSeleccionada = event.target.value

    if (opcionSeleccionada == "ah") {

        content.innerHTML = ""

        // para recorrer arrays
        personajes.forEach(function (personaje){
            
            //personaje.name

            let html = `<div><h3>${personaje.name}</h3><img src="${personaje.image}" /></div>`
            content.insertAdjacentHTML("beforeend", html)

            
        })
    }

})

