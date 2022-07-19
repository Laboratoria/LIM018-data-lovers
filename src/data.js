export const filterEspecies = (datos, gato) => {
  return  datos.filter(element => element.species=== gato); 

};
 
export const ordeName = (data) => {
  return data.sort(function (a,b) {
    if (a.name > b.name) {
      return 1;
    } else return -1
    // else (a.name < b.name) {
    //   return -1;

    // }
    // return 0;
  });
};

export const filtrarBuscador = (persons,name)=>{
return (persons.filter(person =>person.name.startsWith(name)));
};

export const filterid = (datos, id) => {
  const modale =  datos.filter(element => element.id == id); 

return modale ;
};

export function computeStats (numPersonajes, numEspecies){
  return parseFloat((numEspecies*100 / numPersonajes).toFixed(2));
}

