import {filterData, sortData, mapedData} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data);

//data.pokemon;

//section
const infoPokemonSection = document.getElementById('info-pokemon-section')

mapedData(data).forEach(element => {
    //divcard
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
    //console.log(element);
});