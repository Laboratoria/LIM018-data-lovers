
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
   
    
  })
}

// ORDENAR ZA
export function orderZa (data){
  return data.sort(( a , b ) => {
    
    if (a.title > b.title){
      return -1;
    }
    
  })
}
// ORDENAR POR AÑO ASCENDENTE
export function sortByAsc (data) {
  return data.sort(( a , b ) => {
   if (a.release_date > b.release_date){
     return 1;
    } 
   if(a.release_date < b.release_date){
     return -1;
   }
  }) 
}
// ORDENAR POR AÑO DESCENDENTE
export function sortByDesc (data) {
  return data.sort(( a , b ) => {
  
   if(a.release_date > b.release_date){
     return -1;
   }
  }) 
}