export const filterEspecies = (datos, gato) => {
  return  datos.filter(element => element.species== gato); 

};

 
export const sort = (a, b) => {
  if (a < b){
return -1; 

  }

  if (a > b){
    return 1; 
  }
  return 0 ;
};


