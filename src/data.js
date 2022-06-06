// estas funciones son de ejemplo

export const sortData = (data,sortBy,sortOrder) => {
  let arrayOrder;
    arrayOrder = data.pokemon.sort((a, b)=> {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        return 0;
    })
    if(sortBy === 'name' && sortOrder === 'asc'){
      return arrayOrder
    }else if(sortBy==='name' && sortOrder === 'desc'){
      return arrayOrder.reverse()
    }else if(sortBy === 'weaknesses' && sortOrder === 'asc'){
      return data.pokemon.sort((a, b)=> a.weaknesses.length - b.weaknesses.length)
    }else if(sortBy==='weaknesses' && sortOrder === 'desc'){
      return  data.pokemon.sort((a, b)=> b.weaknesses.length - a.weaknesses.length)
    } 
};


//filtrar datos por tipo, generación y egg
const types = [ 'poison', 'fire', 'normal', "fire", 'flying', 'dragon', 
'water', 'dark', 'ice', 'steel', 'bug', 'psychic', 'steel',
'ground', 'electric', 'fighting', 'rock','ghost', 'dragon','fairy']
const generations = ['kanto', 'johto']
const eggs = ['2 km', '5 km', '7 km', '10 km', 'not in eggs']

export const filterData = (data, condition) => {
  if(types.includes(condition)) {
    var result = data.filter( pokemon => pokemon.type.includes(condition) )
    return result 
  } else if (generations.includes(condition)) {
    var result = data.filter( pokemon => pokemon.generation.name.includes(condition) )
    return result
  } else if (eggs.includes(condition)) {
    var result = data.filter( pokemon => pokemon.egg.includes(condition) )
    return result
  } else {
    return 'error'
  }
};
