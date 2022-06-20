import { filterDataDirector} from './data.js';
//import jsondata from './data/ghibli/ghibli.js';

// jalondo la data del json
const api = await fetch("ghibli.json");
const data = await api.json();
const estudio = data.studio;
//
const titulo= document.querySelector('.titulo')
titulo.innerHTML = `<i>${estudio}</i>`

const contenedor= document.querySelector('.contenedor');

let director = document.querySelector('#filtersDirector');
console.log(director)
director.addEventListener('change', () => {
let selectionOption = director.options[director.selectedIndex]

const datadirector = filterDataDirector(data.films,selectionOption.value)

contenedor.innerHTML=null;
datadirector.forEach(e => {
const {poster,title,director,producer,release_date,rt_score} = e;
let card = `<div class="card">
    <img src="${poster}" alt="" />
    <div>
      <h4 class="titulo">${title}</h4>
      <p class="anio">${release_date}</p>
      <p class="director">${director}</p>
      <p class="productor">${producer}</p>
      <p class="score">${rt_score}</p>
    </div>
  </div>
`
contenedor.innerHTML+=card

//cards+=card;
});
//contenedor.innerHTML=cards




console.log(datadirector)
})
