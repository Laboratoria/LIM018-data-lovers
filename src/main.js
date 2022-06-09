//import { styleDisabled } from 'htmlhint';
import {filterData, sortData, mapedData} from './data.js';

// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(data);

//data.pokemon;

//sectio

const infoPokemonSection = document.getElementById('info-pokemon-section');
const selectType = document.querySelector('.type');
const selectGeneration = document.querySelector('.generations');
const selectEggs = document.querySelector('.eggs')
const selectOrder = document.querySelector('.order');
//const selectOrderCamp = document.querySelector('.orderCamp');

/*console.log(selectOrder)*/
const showElements = (data) => {
    console.log(data)
    data.forEach((element) => {
    const divCardPokemon=document.createElement('div');

    //class title-pokemon    
    divCardPokemon.classList.add('title-pokemon');
    infoPokemonSection.appendChild(divCardPokemon);

    //div-creado-para img
    const createdDiv = document.createElement('div');
    createdDiv.classList.add('container');
    divCardPokemon.appendChild(createdDiv);

    //img-creado
    const createImg = document.createElement('img');
    createImg.src = element.img
    createdDiv.appendChild(createImg);

    //h2title
    const h2title = document.createElement('h2');
    divCardPokemon.appendChild(h2title);

    //titulo pokemon
    const titlePokemon = document.createTextNode(element.name)
    h2title.appendChild(titlePokemon);

    //parrafo-creado-para numero de pokemon
    const createdParagraph1 = document.createElement('p');
    divCardPokemon.appendChild(createdParagraph1);

    //pokemon-numero
    const numPokemon = document.createTextNode(element.num);
    createdParagraph1.appendChild(numPokemon);

    //parrafo-creado-para heigth-pokemon
    const createdParagraph2 = document.createElement('p');
    divCardPokemon.appendChild(createdParagraph2);

    //pokemon-heigth
    const heigthPokemon=document.createTextNode(element.heigth);
    createdParagraph2.appendChild(heigthPokemon);
    
    //parrafo-creado-para weigth-pokemon
    const createdParagraph3 = document.createElement('p');
    divCardPokemon.appendChild(createdParagraph3);

    //pokemon-weigth
    const weigthPokemon = document.createTextNode(element.weight);
    createdParagraph3.appendChild(weigthPokemon);
    })
};

showElements(mapedData(data.pokemon));

const  filterAndShow = (e) => {
    let elements = mapedData(filterData(data, e.target.value ));
    console.log(elements)
    while (infoPokemonSection.firstChild) {
        infoPokemonSection.removeChild(infoPokemonSection.firstChild);
    }
    return showElements(elements)
}

selectType.addEventListener('change',  function(e){ filterAndShow(e) })

selectGeneration.addEventListener('change', function(e){ filterAndShow(e) })

selectEggs.addEventListener('change',  function(e){ filterAndShow(e) })

/* selectOrder.forEach((e) => {
    e.addEventListener('change', function(e) {
        console.log(e.target.value)
    })
}) */



/* selectOrderCamp.addEventListener('change', function(e){

    let order = e.target.value;
        let camp = e.target.value;
        console.log(sortData(data, camp, order))
}) */
//ordenando de forma ascedente por nombre de pokemon, por el momento se muestra en consola
//console.log(sortData(data.pokemon,'name','desc'))

//console.log(filterData(data.pokemon, 'legendary'))
//console.log(computeStats(data.pokemon))
