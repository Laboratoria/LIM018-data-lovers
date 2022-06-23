
//movie es elparametro q voy a iterar

//FILTAR POR DIRECTOR

export function filterByDirector (data, filtersDirector) {
  return data.filter(films => films.director == filtersDirector);
}
//FILTAR POR PRODUCTOR
export function filterByProducer (data, filtersProducer) {
  return data.filter(films => films.producer == filtersProducer);
}