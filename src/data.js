export const filterEspecies = (datos, gato) => {
  return  datos.filter(element => element.species== gato); 

};

 
export const filtrarPersonajes = (datos ,nombre) => {

  return datos.filter(e => e.name==nombre);
};