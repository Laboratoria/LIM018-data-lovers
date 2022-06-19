
//FILTAR POR DIRECTOR
export const filterByDirector = (data, nameDirector) => {
  const filmsDirector = data.filter(movie => movie.director == nameDirector);
  return filmsDirector;
};


