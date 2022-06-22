
//movie es elparametro q voy a iterar
//FILTAR POR DIRECTOR
export function filterByDirector (data, filtersDirector) {
  return data.filter(films => films.director == filtersDirector);
  
}
