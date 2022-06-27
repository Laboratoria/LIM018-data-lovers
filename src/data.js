
//movie es elparametro q voy a iterar

//FILTAR POR DIRECTOR

export function filterByDirector (data, filtersDirector) {
  return data.filter(films => films.director == filtersDirector);
}

//FILTAR POR PRODUCTOR
export function filterByProducer (data, filtersProducer) {
  return data.filter(films => films.producer == filtersProducer);
}

// ordenar AZ
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

// ORDENAR ZA
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
// ORDENAR POR AÑO
export const sortBy = (data,filtersYear)=>{
  let sortYears = data.sort((a,b) => {
  if(filtersYear === "Antiguo") {
   (a.release_date < b.release_date)
     return -1;
  } 
  else{
    (a.release_date > b.release_date)
    return 1;
  }

  }); 
  return sortYears;
  
}
console.log(sortBy)