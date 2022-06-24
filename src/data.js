
//movie es elparametro q voy a iterar

//FILTAR POR DIRECTOR

export function filterByDirector (data, filtersDirector) {
  return data.filter(films => films.director == filtersDirector);
}

//FILTAR POR PRODUCTOR
export function filterByProducer (data, filtersProducer) {
  return data.filter(films => films.producer == filtersProducer);
}


export function orderAz (data){
  return data.sort(( a , b ) => {
    if (a.title < b.title){
      return -1;
    }
    if (a.title > b.title){
      return 1;
    }
    return 0;
  })
}

export function orderZa (data){
  return data.sort(( a , b ) => {
    if (a.title < b.title){
      return 1;
    }
    if (a.title > b.title){
      return -1;
    }
    return 0;
  })
}

