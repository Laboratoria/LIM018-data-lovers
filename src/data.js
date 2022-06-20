
//funcion que Ordena por nombre y de manera ascedente y descendente.
export const sortData = (data,sortBy,sortOrder) => {
  let arrayOrder = [...data];
   if(sortBy === 'name' && sortOrder === 'asc'){
      return arrayOrder.sort((a,b)=> a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
    }else if(sortBy==='name' && sortOrder === 'desc'){
      return arrayOrder.sort((a,b)=> a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1);
    }else if(sortBy === 'weaknesses' && sortOrder === 'asc'){
      return arrayOrder.sort((a, b)=> a.weaknesses.length - b.weaknesses.length)
    }else if(sortBy==='weaknesses' && sortOrder === 'desc'){
      return  arrayOrder.sort((a, b)=> b.weaknesses.length - a.weaknesses.length)
    }
};

//filtrar datos por tipo, generación y egg
const types = [ 'poison', 'fire', 'normal', 'flying', 'dragon',
'water', 'dark', 'ice', 'steel', 'bug', 'psychic','ground', 
'electric', 'fighting', 'rock','ghost','fairy', 'grass']
const generations = ['kanto', 'johto']
const eggs = ['2 km', '5 km', '7 km', '10 km', 'not in eggs']
const pokemonsRarety = ['legendary', 'mythic']


//funcion que filtra typo generacion y egg
export const filterData = (data, condition) => {
  if(types.includes(condition)) { 
    return data.filter( pokemon => pokemon.type.includes(condition) )
  } else if (generations.includes(condition)) {
    return data.filter( pokemon => pokemon.generation.name.includes(condition) )
  } else if (eggs.includes(condition)) {
    return data.filter( pokemon => pokemon.egg.includes(condition) )
  } else if(pokemonsRarety.includes(condition)) {
    return data.filter(pokemon => pokemon["pokemon-rarity"].includes(condition));
  } else {
    return data
  }
};


//funcion mapedData retorna  elementos de la data 
export const mapedData = (data) => {
  return data.map((itemPokemon)=>{
    return {
        num:itemPokemon.num,
        name:itemPokemon.name,
        img:itemPokemon.img,
        heigth:itemPokemon.size.height,
        weight:itemPokemon.size.weight,
        type:itemPokemon.type,
    }
})};