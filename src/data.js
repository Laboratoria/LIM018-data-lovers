// estas funciones son de ejemplo

export const sortData = (data, sortBy, sortOrder) => {
  //sortData(data, sortBy, sortOrder)
  return 'example';
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
