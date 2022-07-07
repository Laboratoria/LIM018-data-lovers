export const filterEspecies = (datos, gato) => {
  return  datos.filter(element => element.species== gato); 

};

 
export const ordeName = (data) => {
  return data.sort(function (a,b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
};
=======

export const filtrarBuscador = (persons,name)=>{
return (persons.filter(person =>person.name.startsWith(name)));
};

export const filterid = (datos, id) => {
  const modale =  datos.filter(element => element.id == id); 
return modale ;
};



 
export const filtrarPersonajes = (datos ,nombre) => {

  return datos.filter(e => e.name==nombre);
};
