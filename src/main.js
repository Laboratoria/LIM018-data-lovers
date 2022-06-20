import { filterByDirector} from './data.js';
//import jsondata from './data/ghibli/ghibli.js';




  fetch ('./data/ghibli/ghibli.json')
   .then(response => response.json())
   .then(data => { 
    let containerFilms =document.getElementById('containerFilms');

    data.films.forEach(film => {
  
      containerFilms.innerHTML += `<img src="${film.poster}" alt="imagen" >`;
    });
    
    console.log(data)
   }
   )

   .catch(err =>console.log (err))















