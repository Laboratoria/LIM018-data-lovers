import {filterData, sortData, mapedData} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const infoPokemonSection = document.getElementById('info-pokemon-section');
const selectType = document.querySelector('.type');
const selectGeneration = document.querySelector('.generations');
const selectEggs = document.querySelector('.eggs')
const inputSearch = document.querySelector('.input-search');
const selectOrderCamp = document.querySelector('.order-camp');
const selectOrder = document.querySelector('.order');
const allInfoPokemon = document.querySelector('.pokemon');
const filters = document.querySelector('.filters');
const header = document.querySelector('.header');
const searchBar = document.querySelector('.search-bar');

//mostrar elementos 
const showElements = (data) => {
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

    //parrafo-creado-para numero de pokemon
    const createdParagraph1 = document.createElement('p');
    divCardPokemon.appendChild(createdParagraph1);
    createdParagraph1.classList.add("pokemon-num");

    //pokemon-numero
    const numPokemon = document.createTextNode(element.num);
    createdParagraph1.appendChild(numPokemon);

    //circle-types
    const divTittleType = document.createElement('div');
    element.type.forEach((e) => {
      circleTypes(e, divTittleType);
    })
    //h2title
    const h2title = document.createElement('h2');
    h2title.classList.add('nameP');
    divTittleType.appendChild(h2title);
    divCardPokemon.appendChild(divTittleType);
    divTittleType.classList.add('title-type')

    const divWP = document.createElement('div');
    divCardPokemon.appendChild(divWP);

    const divWP2 = document.createElement('div');
    divCardPokemon.appendChild(divWP2);

    const heigthP = document.createElement('p');
    divCardPokemon.appendChild(heigthP);

    const weigthP = document.createElement('p');
    divCardPokemon.appendChild(weigthP);

    const heigthTittle = document.createTextNode('Heigth')
    heigthP.appendChild(heigthTittle)

    const weigthTittle = document.createTextNode('Weigth')
    weigthP.appendChild(weigthTittle)

    divWP.appendChild(heigthP)
    divWP.appendChild(weigthP)
    divWP.classList.add('tittle-contain')

    //titulo pokemon
    const titlePokemon = document.createTextNode(element.name)
    h2title.appendChild(titlePokemon);

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

    divWP2.appendChild(createdParagraph2)
    divWP2.appendChild(createdParagraph3)
    divWP2.classList.add('value-contain')
  });
};

const circleTypes = (e, campo) => {
    const imgC = document.createElement('img');
    imgC.src = `images/circle-${e}.png`
    campo.appendChild(imgC);
}

showElements(mapedData(data.pokemon));

//filtrar y mostrar
const  filterAndShow = (e) => {
    let elements = mapedData(filterData(data, e.target.value ));
    while (infoPokemonSection.firstChild) {
        infoPokemonSection.removeChild(infoPokemonSection.firstChild);
    }
    return showElements(elements)
}



selectType.addEventListener('change',  function(e){ filterAndShow(e) })

selectGeneration.addEventListener('change', function(e){ filterAndShow(e) })

selectEggs.addEventListener('change',  function(e){ filterAndShow(e) })


selectOrder.addEventListener('change',()=>{
    const dataOrder = sortData(data.pokemon, selectOrderCamp.value, selectOrder.value);
    while (infoPokemonSection.firstChild) {
        infoPokemonSection.removeChild(infoPokemonSection.firstChild);
    }
    showElements(mapedData(dataOrder))
})

selectOrderCamp.addEventListener('change',()=>{
    selectOrder.value = 'order-direction'
})


inputSearch.addEventListener('input', function(e){
  let iText = e.target.value.toLowerCase();
 /* let search = sortData(data.pokemon,'name','asc')
  search = mapedData(search).filter(poke=> poke.name.indexOf(iText) !== -1)
      while (infoPokemonSection.firstChild) {
        infoPokemonSection.removeChild(infoPokemonSection.firstChild);
      }
  showElements(search)  */

  const search = mapedData(data.pokemon).filter(poke=> poke.name.indexOf(iText) !== -1)
      while (infoPokemonSection.firstChild) {
        infoPokemonSection.removeChild(infoPokemonSection.firstChild);
      }
  showElements(search);
})

const styleforTypes = (e, campo) => {
    campo.classList.add(e)
    const imgC = document.createElement('img');
    imgC.src = `images/${e}.png`
    campo.appendChild(imgC);
}

const showAllInfoPoke = (pokemon) => {
  // main
  const mainPage = document.createElement('section');
  mainPage.classList.add('main-allInfoPokemon')
  //nav
  const navPage = document.createElement('section');
  //section
  const sectPage = document.createElement('section');
  sectPage.classList.add('info-section')
  //poke-img
  const pokeImg = document.createElement('img');
  pokeImg.classList.add('pokemon-img')
  pokeImg.src = pokemon.img;
  navPage.appendChild(pokeImg)

  //poke-name
  const pokeName = document.createElement('h1');
  const name = document.createTextNode(`N° ${pokemon.num} ${pokemon.name}`);
  pokeName.classList.add('pokemon-name');
  pokeName.appendChild(name);
  allInfoPokemon.appendChild(pokeName);


  
  // header
  /*const headerPage = document.createElement('header');
  headerPage.classList.add('header-allInfoPokemon')
  headerPage.appendChild(pokeName)
  allInfoPokemon.appendChild(headerPage);*/


  //poke-about
  const aboutTag = document.createElement('h3');
  const aboutName = document.createTextNode('About: ');
  const pokeAbout = document.createElement('p');
  const about = document.createTextNode(pokemon.about);
  pokeAbout.classList.add('pokemon-about');
  aboutTag.classList.add('pokemon-sect')
  aboutTag.appendChild(aboutName);
  pokeAbout.appendChild(about);
  allInfoPokemon.appendChild(aboutTag);
  allInfoPokemon.appendChild(pokeAbout)
  // div
  const div1 = document.createElement('div');
 
  div1.classList.add('about')
  div1.appendChild(aboutTag)
  div1.appendChild(pokeAbout)
  sectPage.appendChild(div1);

  //div2
  const div2 = document.createElement('div');
  //poke-generation
  const generationTag = document.createElement('h3');
  const generationName = document.createTextNode('Generation: ');
  const pokeGeneration = document.createElement('p');
  const generation = document.createTextNode(pokemon.generation.name);
  generationTag.appendChild(generationName);
  pokeGeneration.appendChild(generation);
  div2.classList.add('pokemon-generation')
  div2.appendChild(generationTag)
  div2.appendChild(pokeGeneration)

  //div3
  const div3 = document.createElement('div');
  //poke-size
  const sizeTag = document.createElement('h3');
  const sizeName = document.createTextNode('Size: ');
  const size = document.createElement('ul');
  const sizeH = document.createElement('li');
  const sizeW = document.createElement('li');
  const height = document.createTextNode('Height: '+pokemon.size.height)
  const weight = document.createTextNode('Weight: '+pokemon.size.weight)
  size.appendChild(sizeH);
  size.appendChild(sizeW);
  sizeH.appendChild(height);
  sizeW.appendChild(weight);
  sizeTag.appendChild(sizeName);
  div3.classList.add('pokemon-size')
  div3.appendChild(sizeTag);
  div3.appendChild(size);

  //div4
  const div4 = document.createElement('div');
  div4.classList.add('container-gs')
  div4.appendChild(div2);
  div4.appendChild(div3);
  sectPage.appendChild(div4);

  //poke-weaknesses
  const div5 = document.createElement('div');
  const div6 = document.createElement('div');
  const weaknessesTag = document.createElement('h3');
  const weaknessesName = document.createTextNode('Weaknesses: ');

  div6.classList.add('weaknesses');
  div5.classList.add('pokemon-weaknesses');
  weaknessesTag.appendChild(weaknessesName);
  div5.appendChild(weaknessesTag)

  pokemon.weaknesses.forEach((e) => {
    const weakness = document.createElement('div');
    const weaknesses = document.createTextNode(e.toUpperCase());

    styleforTypes(e, weakness);

    div6.appendChild(weakness)
    weakness.appendChild(weaknesses);
})

    div5.appendChild(div6);


  //poke-resistant
  const div7 = document.createElement('div');
  const div8 = document.createElement('div');
  const div9 = document.createElement('div');
  const resistantTag = document.createElement('h3');
  const resistantName = document.createTextNode('Resistant to: ');

  div7.classList.add('pokemon-resistant');
  resistantTag.appendChild(resistantName);

  pokemon.resistant.forEach((e) => {
    const resistants = document.createElement('div');
    const resistant = document.createTextNode(e.toUpperCase());

    styleforTypes(e, resistants);

    div7.appendChild(resistants)
    resistants.appendChild(resistant);
  })

  div9.classList.add('pokemon-rw');
  div7.classList.add('resistants');
  div8.appendChild(resistantTag);
  div8.appendChild(div7);
  div9.appendChild(div5)
  div9.appendChild(div8)
  sectPage.appendChild(div9);

  //poke-type
  const div12 = document.createElement('div');
  const div13 = document.createElement('div');
  const typeTag = document.createElement('h3');
  const typeName = document.createTextNode('Type: ');

  typeTag.appendChild(typeName);
  div13.classList.add('pokemon-type')
  div12.classList.add('types')
  div13.appendChild(typeTag)

  pokemon.type.forEach((e) => {
    const type = document.createElement('div');
    const typeContent = document.createTextNode(e.toUpperCase());

    styleforTypes(e, type);

    type.appendChild(typeContent);
    div12.appendChild(type)
  })

  div13.appendChild(div12)
  navPage.appendChild(div13);


  //poke-egg
  const div14 = document.createElement('div');
  const eggTag = document.createElement('h3');
  const eggName = document.createTextNode('Egg: ');
  const egg = document.createElement('p');
  const eggContent = document.createTextNode(pokemon.egg);
  egg.appendChild(eggContent);
  eggTag.appendChild(eggName);

  div14.classList.add('pokemon-egg')
  div14.appendChild(eggTag);
  div14.appendChild(egg);
  navPage.appendChild(div14);

  //poke-buddy-distance
  const div15 = document.createElement('div');
  const pokeBuddyDistanceTag = document.createElement('h3');
  const pokeBuddyDistanceName = document.createTextNode('Buddy-distance-km: ');
  const buddyDistance = document.createElement('p');
  const pokeBuddyDistance = document.createTextNode(pokemon['buddy-distance-km']+'km');
  buddyDistance.appendChild(pokeBuddyDistance);
  pokeBuddyDistanceTag.appendChild(pokeBuddyDistanceName);

  div15.classList.add('pokemon-buddy-distance')
  div15.appendChild(pokeBuddyDistanceTag)
  div15.appendChild(buddyDistance)
  navPage.appendChild(div15);

  //poke-encounter
  const div16 = document.createElement('div');
  const pokeEncounterTag = document.createElement('h3');
  const pokeEncounterName = document.createTextNode('Encounter: ');
  const encounter = document.createElement('ul');
  const pokeBaseFleeRate = document.createElement('li');
  const pokeBaseCaptureRate = document.createElement('li');
  const baseFleeRate = document.createTextNode('Base-flee-rate: '+pokemon.encounter["base-flee-rate"])
  const baseCaptureRate = document.createTextNode('Base-capture-rate: '+pokemon.encounter["base-capture-rate"])
  pokeBaseFleeRate.appendChild(baseFleeRate);
  pokeBaseCaptureRate.appendChild(baseCaptureRate);
  encounter.appendChild(pokeBaseFleeRate);
  encounter.appendChild(pokeBaseCaptureRate);
  pokeEncounterTag.appendChild(pokeEncounterName);

  div16.classList.add('pokemon-encounter')
  div16.appendChild(pokeEncounterTag)
  div16.appendChild(encounter)

  navPage.appendChild(div16);

  //poke-quick-move
  const div10 = document.createElement('div');
  const tableName1 = document.createElement('h3');
  const nameContent = document.createTextNode('Quick move: ');
  const tableTag = document.createElement('table');
  const firstTrTag = document.createElement('tr');
  const firstThTag = document.createElement('th');
  const secondThTag = document.createElement('th');
  const thirdThTag = document.createElement('th');
  const fourThTag = document.createElement('th');
  const fiveThTag = document.createElement('th');
  const firstThTagContent = document.createTextNode('Name');
  const secondThTagContent = document.createTextNode('Type');
  const thirdThTagContent = document.createTextNode('Base damage');
  const fourThTagContent = document.createTextNode('Energy');
  const fiveThTagContent = document.createTextNode('Move duration seg');

  tableName1.appendChild(nameContent)
  firstThTag.appendChild(firstThTagContent);
  secondThTag.appendChild(secondThTagContent);
  thirdThTag.appendChild(thirdThTagContent);
  fourThTag.appendChild(fourThTagContent);
  fiveThTag.appendChild(fiveThTagContent);

  firstTrTag.appendChild(firstThTag);
  firstTrTag.appendChild(secondThTag);
  firstTrTag.appendChild(thirdThTag);
  firstTrTag.appendChild(fourThTag);
  firstTrTag.appendChild(fiveThTag);

  tableTag.appendChild(firstTrTag);

 pokemon['quick-move'].forEach((e) => {
    const thirdtTrTag = document.createElement('tr');
    const firstTdTag = document.createElement('td');
    const secondTdTag = document.createElement('td');
    const thirdTdTag = document.createElement('td');
    const fourTdTag = document.createElement('td');
    const fiveTdTag = document.createElement('td');

    const firstTdTagContent = document.createTextNode(e['name']);
    const secondTdTagContent = document.createTextNode(e['type']);
    const thirdTdTagContent = document.createTextNode(e['base-damage']);
    const fourTdTagContent = document.createTextNode(e['energy']);
    const fiveTdTagContent = document.createTextNode(e['move-duration-seg']);

    firstTdTag.appendChild(firstTdTagContent);
    secondTdTag.appendChild(secondTdTagContent);
    thirdTdTag.appendChild(thirdTdTagContent);
    fourTdTag.appendChild(fourTdTagContent);
    fiveTdTag.appendChild(fiveTdTagContent);

    thirdtTrTag.appendChild(firstTdTag);
    thirdtTrTag.appendChild(secondTdTag);
    thirdtTrTag.appendChild(thirdTdTag);
    thirdtTrTag.appendChild(fourTdTag);
    thirdtTrTag.appendChild(fiveTdTag);

    tableTag.appendChild(thirdtTrTag);
  })
  div10.classList.add('padding-table');
  div10.appendChild(tableName1);
  div10.appendChild(tableTag);
  sectPage.appendChild(div10);

  //poke-special-attack
  const div11 = document.createElement('div');
  const tableName2 = document.createElement('h3');
  const nameContent2 = document.createTextNode('Special attack: ');
  const tableTagTwo = document.createElement('table');
  const tableTBody = document.createElement('tbody');
  const secondTrTagSA = document.createElement('tr');
  const firstThTagSA = document.createElement('th');
  const secondThTagSA = document.createElement('th');
  const thirdThTagSA = document.createElement('th');
  const fourThTagSA = document.createElement('th');
  const fiveThTagSA = document.createElement('th');
  const firstThTagSaContent = document.createTextNode('Name');
  const secondThTagSaContent = document.createTextNode('Type');
  const thirdThTagSaContent = document.createTextNode('Base damage');
  const fourThTagSaContent = document.createTextNode('Energy');
  const fiveThTagSaContent = document.createTextNode('Move duration seg');

  tableName2.appendChild(nameContent2);
  firstThTagSA.appendChild(firstThTagSaContent);
  secondThTagSA.appendChild(secondThTagSaContent);
  thirdThTagSA.appendChild(thirdThTagSaContent);
  fourThTagSA.appendChild(fourThTagSaContent);
  fiveThTagSA.appendChild(fiveThTagSaContent);

  secondTrTagSA.appendChild(firstThTagSA);
  secondTrTagSA.appendChild(secondThTagSA);
  secondTrTagSA.appendChild(thirdThTagSA);
  secondTrTagSA.appendChild(fourThTagSA);
  secondTrTagSA.appendChild(fiveThTagSA);

  tableTagTwo.classList.add('styled-table')

  tableTagTwo.appendChild(secondTrTagSA);

  pokemon['special-attack'].forEach((e) => {
    const fourtTrTag = document.createElement('tr');
    const firstTdTag = document.createElement('td');
    const secondTdTag = document.createElement('td');
    const thirdTdTag = document.createElement('td');
    const fourTdTag = document.createElement('td');
    const fiveTdTag = document.createElement('td');

    const firstTdTagContent = document.createTextNode(e['name']);
    const secondTdTagContent = document.createTextNode(e['type']);
    const thirdTdTagContent = document.createTextNode(e['base-damage']);
    const fourTdTagContent = document.createTextNode(e['energy']);
    const fiveTdTagContent = document.createTextNode(e['move-duration-seg']);

    firstTdTag.appendChild(firstTdTagContent);
    secondTdTag.appendChild(secondTdTagContent);
    thirdTdTag.appendChild(thirdTdTagContent);
    fourTdTag.appendChild(fourTdTagContent);
    fiveTdTag.appendChild(fiveTdTagContent);

    fourtTrTag.appendChild(firstTdTag);
    fourtTrTag.appendChild(secondTdTag);
    fourtTrTag.appendChild(thirdTdTag);
    fourtTrTag.appendChild(fourTdTag);
    fourtTrTag.appendChild(fiveTdTag);

    tableTBody.appendChild(fourtTrTag);
    tableTagTwo.appendChild(tableTBody);
  })
  div11.classList.add('padding-table');
  div11.appendChild(tableName2)
  div11.appendChild(tableTagTwo)
  sectPage.appendChild(div11);

  //num
  //name
  //candy

  //poke-evolution
 /*  const containerEvolution =  document.createElement('div');
  const imgPoke = document.createElement('img');
  imgPoke.src = pokemon.img ;
  const candyTag = document.createElement('p');
  const candy = document.createTextNode(pokemon.evolution['candy']);
  /* console.log(candy)
 */
  //next-evolution
 /*  const containerNextEvolution =  document.createElement('div');
  const imgNextoke = document.createElement('img');
  const imgPokemones = pokemon.evolution */

 /*  const poke = data.filter(p => p.includes(imgPokemones))
  imgNextoke.src = poke.img ;
  console.log(imgPokemones)
   */
  //poke-stats
  /* const divStats = document.querySelector('pokemon-stats');
  const statsTag = document.createElement('h3')
  const statsContent = document.createTextNode('Stats: ');
  statsTag.appendChild(statsContent)
  divStats.appendChild(statsTag); */
  /* const labels = [
    'Base Attack',
    'Base Defense',
    'Base Stamina',
    'Max CP',
    'Max HP',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Stats',
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 175, 204)',
        'rgb(202, 255, 191)'
      ],
      pointBackgroundColor: "#a7281a",
      pointBorderColor: "#fff",
      borderColor: 'rgb(255, 255, 255)',
      data: [pokemon['stats']['base-attack'], pokemon['stats']['base-defense'], 
      pokemon['stats']['base-stamina'], pokemon['stats']['max-cp'], 
      pokemon['stats']['max-hp']],
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  ); */

  mainPage.appendChild(navPage);
  mainPage.appendChild(sectPage);
  allInfoPokemon.appendChild(mainPage);
  
}

infoPokemonSection.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.classList.contains("nameP")) {
    let x = e.target.innerText;
    const p = data.pokemon.filter(p => p.name.includes(x))
    header.style.display = 'none';
    filters.style.display = 'none';
    searchBar.style.display = 'none';
    infoPokemonSection.style.display = 'none';
    //allInfoPokemon.style.display = 'flex';
    showAllInfoPoke(p[0]);
  }
});
