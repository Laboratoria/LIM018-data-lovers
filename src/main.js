import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

//data.pokemon;
//section
const infoPokemonSection = document.getElementById('info-pokemon-section')

const datosPokemon=data.pokemon;

//map solo para mapear los datos  pedidos en la historia
const mapedData = datosPokemon.map((itemPokemon)=>{
 return {
    name:itemPokemon.name,
    img:itemPokemon.img,
    heigth:itemPokemon.size.height,
    weight:itemPokemon.size.weight
 }
})

console.log(mapedData)

mapedData.forEach(element => {
    //divcard
    const divCardPokemon=document.createElement('div');
    //class title-pokemon
    divCardPokemon.classList.add('title-pokemon');
    infoPokemonSection.appendChild(divCardPokemon);

    //h2title
    const h2title = document.createElement('h2');
    divCardPokemon.appendChild(h2title);

    //titulo pokemon
    const titlePokemon=document.createTextNode(element.name)
    h2title.appendChild(titlePokemon);

    //div-creado
    const createdDiv = document.createElement('div');
    createdDiv.classList.add('container');
    divCardPokemon.appendChild(createdDiv);

    //img-creado
    const createImg = document.createElement('img');
    createImg.src = element.img
    createdDiv.appendChild(createImg);

    //parrafo-creado-para heigth-pekemon
    const createdParagraph = document.createElement('p');
    divCardPokemon.appendChild(createdParagraph);

    //pokemon-heigth
    const heigthPokemon=document.createTextNode(element.heigth);
    createdParagraph.appendChild(heigthPokemon);
    
    //parrafo-creado-para weigth-pokemon
    const createdParagraph1 = document.createElement('p');
    divCardPokemon.appendChild(createdParagraph1);

    //pokemon-weigth
    const weigthPokemon = document.createTextNode(element.weight);
    createdParagraph1.appendChild(weigthPokemon);

        //console.log(element);
});