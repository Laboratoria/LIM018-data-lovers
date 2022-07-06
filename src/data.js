// estas funciones son de ejemplo

export const ordenarAscendente = (data) => {

  function sortPokemon(x, y){
    if(x.name < y.name){
       return -1;
    }
    if(x.name > y.name){
       return 1;
    }
 }
  return data.sort(sortPokemon);
};

export const anotherExample = () => {
  return 'OMG';
};

export const ordenarDescendente = (data) => {
  function sortDesPokemon(x,y){
    if(x.name < y.name){
       return 1;
    }
    if(x.name > y.name){
       return -1;
    }
 }
 return data.sort(sortDesPokemon);
};



//export const filterPokemon = poke => poke.name === searchPokemon.value.toLowerCase() || poke.num ===searchPokemon.value.toLowerCase();




// export function search(data, enter) {   
//    return data.filter(function(poke){
      
//    })
 
// }

export const search = (data, enter) => {
   function igual(x){
      if( enter === x.name || enter === x.num){
         return x;
      }
     
   }
  return data.filter(igual);
 
}