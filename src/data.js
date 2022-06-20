// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

//filtro por director
export const filterDataDirector = (data, nameDirector) => {
  const newDataDirector = data.filter(movie => movie.director == nameDirector);
  return newDataDirector;
}

