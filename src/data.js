
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
const pokemonsRarity = ['legendary', 'mythic', 'normal']


//funcion que filtra typo generacion y egg
export const filterData = (data, condition) => {
  if(types.includes(condition)) { 
    return data.filter( pokemon => pokemon.type.includes(condition) )
  } else if (generations.includes(condition)) {
    return data.filter( pokemon => pokemon.generation.name.includes(condition) )
  } else if (eggs.includes(condition)) {
    return data.filter( pokemon => pokemon.egg.includes(condition) )
  } else if(pokemonsRarity.includes(condition)) {
    return data.filter(pokemon => pokemon["pokemon-rarity"].includes(condition));
  }
};


//funcion mapedData retorna  elementos de la data 
export const mapedData = (data) => {
  return data.map((itemPokemon)=>{
    return {
        num:itemPokemon.num,
        name:itemPokemon.name,
        img:itemPokemon.img,
        height:itemPokemon.size.height,
        weight:itemPokemon.size.weight,
        type:itemPokemon.type,
    }
})};

//computeStats
export const computeStats = (data) => {
  let valueStab = data.map(element => {
   return element['special-attack'].map((e) => {
      if( element.type.includes(e.type)) {
        //40*50% + 40 = 40x0.5 + 40 = 40 (0.5 +1) = 40 *1.5
        const bonusDamage = e['base-damage'] * 1.2
        //console.log(element.name + ' ' + e.name + ' ' + e.type + ' ' + bonusDamage )
        return bonusDamage;
      } else {
        return e['base-damage']
      }
    })
  });

  let valueDps = data.map(pokemon => {
   return pokemon['special-attack'].map((e) => {
     return parseFloat(e['base-damage'] / e['move-duration-seg']).toFixed(1)
    })
  })

 let valueEps = data.map(pokemon => {
    return pokemon["special-attack"].map((e) => {
      //console.log(e.energy / e['move-duration-seg'])
      return parseFloat(e.energy / e['move-duration-seg']).toFixed(1)
     })
   })

  const Stats = {
    stab: valueStab,
    dps: valueDps,
    eps: valueEps
  }
  return Stats 

}

/* 40*20% + 40 = 40x0.2 + 40 = 40 (0.2 +1) = 40 *1.5
55*50% + 55 = 55* 0.5 + 55 = 55(0.) */

/* Su traducción es Bono por ataque del mismo tipo, lo que quiere decir que los Pokémon, al utilizar un movimiento ofensivo que corresponda con alguno de sus tipos, será potenciado.

¿Cuánto se potencia? En un 50% */
/* 
Charmander (Pokémon tipo fuego) utiliza Ascuas (Movimiento tipo fuego, cuya potencia base es de 40) aumentará su potencia base en un 50%, es decir:

40 * 1.5 = 60 */

