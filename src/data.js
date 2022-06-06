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

export const anotherExample = () => {
  return 'OMG';
};
