
import {filterByDirector, filterByProducer, orderAz, orderZa, sortByAsc, sortByDesc, compute } from './data.js';
import data from './data/ghibli/ghibli.js';

const filtersDirector = document.getElementById("filtersDirector");
const filtersProducer = document.getElementById("filtersProducer");
const btnpeliculas = document.getElementById("listaPeliculas");
const header = document.getElementById('header');
const contenedorPaginas = document.getElementById("contenedorPaginas");
const btnhome = document.getElementById("home");
const containerFilms = document.getElementById('containerFilms');
const buttonGraphic = document.getElementById('buttonGraphic')
const boxGraphic = document.getElementById('box_graphic')



btnpeliculas.addEventListener("click", () => {
  header.className = "disabled";
  contenedorPaginas.className = "enabled";
  const videoportada = document.getElementById('videoportada');
  videoportada.pause();
  })

/*********************************************************/
  btnhome.addEventListener("click", () => {
    header.className = "enabled";
    contenedorPaginas.className = "disabled";
    const videoportada = document.getElementById('videoportada');
    boxGraphic.className = "disabled"; /// se agrego aqui
    videoportada.play();

  });

 /*****  Div para contenido de cada pelicula FUNCION    *************/
 /*const headerMain = document.getElementById('header')*/
 const footerMain = document.getElementById('footer');
 /*const containerMain = document.getElementById('maincontaniner');*/
 const body = document.querySelector('body');


 const newContainer = function (e) {
  e.preventDefault;
  containerFilms.innerHTML = "";
  /*window.scroll(0, 0);
  headerMain.classList.remove('header');
  containerMain.style.display = 'none';*/

/**********************************************/

  let peliContainer = document.createElement("div");
  peliContainer.classList.add('movie__container');
  let sectionFilm = document.createElement("section");
  sectionFilm.classList.add('movie__section');

  sectionFilm.innerHTML =`<h3>${e.title}</h3>
  <img class="imgDirector"src="${e.poster}" alt="imagen" >
  <p class="titleDirector"> ${e.title}</p>
  <p class="parrafoDirector">Year:"${e.release_date}"</p>
  <p class="parrafoDirector">Director:"${e.director}"</p>

  <p class="parrafoDirector">Producer: "${e.producer}"</p>
  <a class="movie__sectionFilm__button" href="index.html">RETURN</a>` ;

  /****************************************/
  let tabContainer = document.createElement("section");
  tabContainer.classList.add('movie__mainContent');

/*****  DESCRIPCION  ***************************** */
  let inputDescription = document.createElement('input');
  let labelDescription = document.createElement('label');
  let divDescription = document.createElement('div');
  divDescription.classList.add('tab');

  inputDescription.setAttribute("type", "radio");
  inputDescription.setAttribute("name", "tabs");
  inputDescription.setAttribute("id", "tabone");
  inputDescription.setAttribute("checked", "checked");
  labelDescription.setAttribute("for", "tabone");

  labelDescription.innerHTML = `Description`;
  divDescription.classList.add('movie__description')
  divDescription.innerHTML = `<p>${e.description}</p>`;

/*****  PERSONAJES ***************************** */
  const characters = e.people;
  let inputCharacters = document.createElement('input');
  let labelCharacters = document.createElement('label');
  let divCharacters = document.createElement('div');
  divCharacters.classList.add('tab');

  let divCharactersSub = document.createElement('div');
  divCharactersSub.classList.add('movie__mainContent__card');

  inputCharacters.setAttribute("type", "radio");
  inputCharacters.setAttribute("name", "tabs");
  inputCharacters.setAttribute("id", "tabtwo");
  labelCharacters.setAttribute("for", "tabtwo");

  labelCharacters.innerHTML = `Characters`;
  let movieDiv = document.createElement('div');
  movieDiv.classList.add('movie__div');


  for (let i = 0; i < characters.length; i++) {
      movieDiv.innerHTML += `
      <img class="movie__img" src="${characters[i].img}" alt="Imagen">`;

      let movieImg = movieDiv.querySelector('.movie__img');

      //modal :
      let divCharacters = document.createElement('div');
      divCharacters.classList.add('overlay');
      divCharacters.setAttribute('id', 'overlay');


      let divPopupCharacters = document.createElement('div');
      divPopupCharacters.classList.add('popup');
      divPopupCharacters.setAttribute('id', 'popup');

      let divPopupImgCharacters = document.createElement('img');
      divPopupImgCharacters.setAttribute('src', characters[i].img);
      divPopupImgCharacters.setAttribute('alt', "imagen  personaje");

      let divPopupDescriptionChar = document.createElement('div');
      divPopupDescriptionChar.classList.add('character__description');

      let datePopupH5Char = document.createElement('h5');
      datePopupH5Char.innerHTML = `${characters[i].name}`;
      let datePopupAgeChar = document.createElement('p');
      datePopupAgeChar.innerHTML = `<spam class="black">Age:</spam> ${characters[i].age}`;
      let datePopupGenderChar = document.createElement('p');
      datePopupGenderChar.innerHTML = `<spam class="black">Gender:</spam> ${characters[i].gender}`;
      let datePopupEyeChar = document.createElement('p');
      datePopupEyeChar.innerHTML = `<spam class="black">Eye color:</spam> ${characters[i].eye_color}`;
      let datePopupHair = document.createElement('p');
      datePopupHair.innerHTML = `<spam class="black">Hair_color:</spam> ${characters[i].hair_color}`;
      let datePopupspecieChar = document.createElement('p');
      datePopupspecieChar.innerHTML = `<spam class="black">Specie:</spam> ${characters[i].specie}`;

      let buttonClose = document.createElement('button');
      buttonClose.classList.add('btn__cerrar__popup');
      buttonClose.innerHTML = 'CLOSE';

      divCharactersSub.appendChild(movieImg);
      divCharactersSub.appendChild(divCharacters);
      divCharacters.appendChild(divPopupCharacters);
      divPopupCharacters.appendChild(divPopupImgCharacters);
      divPopupCharacters.appendChild(divPopupDescriptionChar);
      divPopupDescriptionChar.appendChild(datePopupH5Char);
      divPopupDescriptionChar.appendChild(datePopupAgeChar);
      divPopupDescriptionChar.appendChild(datePopupGenderChar);
      divPopupDescriptionChar.appendChild(datePopupEyeChar);
      divPopupDescriptionChar.appendChild(datePopupHair);
      divPopupDescriptionChar.appendChild(datePopupspecieChar);
      divPopupDescriptionChar.appendChild(buttonClose);

        //ABRIR Y CERRAR POP UP / MODAL
        movieImg.addEventListener("click", function (e) {
          e.preventDefault();
          divCharacters.classList.add("active");
          divPopupCharacters.classList.add("active");
      });
        buttonClose.addEventListener("click", function (e) {
          e.preventDefault();
          divCharacters.classList.remove("active");
          divPopupCharacters.classList.remove("active");
      });
    }/*cierra for*/

    /********************  Vehiculos y locación **************/

    let location = e.locations;
    let vehicle= e.vehicles;

    let inputOther = document.createElement('input');
    let labelOther = document.createElement('label');
    let divOther = document.createElement('div');
    let divOtherSub = document.createElement('div');

    divOtherSub.classList.add('movie__mainContent__card');
    divOther.classList.add('tab');
    inputOther.setAttribute("type", "radio");
    inputOther.setAttribute("name", "tabs");
    inputOther.setAttribute("id", "tabthree");
    labelOther.setAttribute("for", "tabthree");
    labelOther.innerHTML = `Location and Vehicle`;


  let movieDivLocation = document.createElement('div');
  movieDivLocation.classList.add('movie__div');

    if (location.length === 0 && vehicle.length === 0) {
      divOtherSub.innerHTML = `<div><img class="movie__img" src="https://static.vix.com/es/sites/default/files/s/studio_ghibli-5.gif" alt="Imagen no disponible"></div>`
    } else {
      for (let i = 0; i < location.length; i++) {
          movieDivLocation.innerHTML += `<img class="movie__img" src="${location[i].img}" alt="imagen de locaciones">`;

          let movieDivImg = movieDivLocation.querySelector('.movie__img');

           // residentes de locaciones
           const arrayResidents = location[i].residents;
           let arrayNamesResidents = arrayResidents.map((habitantes) => {
               if (habitantes === "TODO") {
                   return "All residents";
               } else {
                   return habitantes.name;
               }
           });
           // POPUP / MODAL
           let divPopupContainer = document.createElement('div');
           divPopupContainer.classList.add('overlay');
           divPopupContainer.setAttribute('id', 'overlay');
           let divPopup = document.createElement('div');
           divPopup.classList.add('popup');
           divPopup.setAttribute('id', 'popup');
           let divPopupImg = document.createElement('img');
           divPopupImg.setAttribute('src', location[i].img);
           divPopupImg.setAttribute('alt', "imagen del personaje");

           let divPopupDescription = document.createElement('div');
           divPopupDescription.classList.add('character__description');
           let datePopupH5 = document.createElement('h5');
           datePopupH5.innerHTML = `${location[i].name}`;
           let datePopupClimate = document.createElement('p');
           datePopupClimate.innerHTML = `<spam class="black">Climate:</spam> ${location[i].climate}`;
           let datePopupTerrain = document.createElement('p');
           datePopupTerrain.innerHTML = `<spam class="black">Terrain:</spam> ${location[i].terrain}`;
           let datePopupWater = document.createElement('p');
           datePopupWater.innerHTML = `<spam class="black">Surface_water:</spam> ${location[i].surface_water}`;
           let datePopupresidents = document.createElement('p');
           datePopupresidents.innerHTML = `<spam class="black">Residents:</spam> ${arrayNamesResidents}`;

           let buttonClose = document.createElement('button');
           buttonClose.classList.add('btn__cerrar__popup');
           buttonClose.innerHTML = 'CLOSE';

           divOtherSub.appendChild(movieDivImg);
           divOtherSub.appendChild(divPopupContainer);
           divPopupContainer.appendChild(divPopup);
           divPopup.appendChild(divPopupImg);
           divPopup.appendChild(divPopupDescription);
           divPopupDescription.appendChild(datePopupH5);
           divPopupDescription.appendChild(datePopupClimate);
           divPopupDescription.appendChild(datePopupTerrain);
           divPopupDescription.appendChild(datePopupWater);
           divPopupDescription.appendChild(datePopupresidents);
           divPopupDescription.appendChild(buttonClose);

          //ABRIR Y CERRAR POPUP / MODAL
          movieDivImg.addEventListener("click", function (e) {
            e.preventDefault();
            divPopupContainer.classList.add("active");
            divPopup.classList.add("active");
        });
        buttonClose.addEventListener("click", function (e) {
            e.preventDefault();
            divPopupContainer.classList.remove("active");
            divPopup.classList.remove("active");
        });

    }
     for (let i = 0; i < vehicle.length; i++) {
       movieDivLocation.innerHTML += `<img class="movie__img" src="${vehicle[i].img}" alt="imagen de vehiculos">`;

       let movieVehicle = movieDivLocation.querySelector('.movie__img');

      // POPUP / MODAL
      let divPopupContainer = document.createElement('div');
      divPopupContainer.classList.add('overlay');
      divPopupContainer.setAttribute('id', 'overlay');
      let divPopup = document.createElement('div');
      divPopup.classList.add('popup');
      divPopup.setAttribute('id', 'popup');
      let divPopupImg = document.createElement('img');
      divPopupImg.setAttribute('src', vehicle[i].img);
      divPopupImg.setAttribute('alt', "imagen del personaje");
      let divPopupDescription = document.createElement('div');
      divPopupDescription.classList.add('character__description');
      let datePopupH5 = document.createElement('h5');
      datePopupH5.innerHTML = `${vehicle[i].name}`;
      let datepopupDescripcion = document.createElement('p');
      datepopupDescripcion.innerHTML = `<spam class="black">Description:</spam> ${vehicle[i].description}`;
      let datePopupClass = document.createElement('p');
      datePopupClass.innerHTML = `<spam class="black">Vehicle Class:</spam> ${vehicle[i].vehicle_class}`;
      let datePopuplength = document.createElement('p');
      datePopuplength.innerHTML = `<spam class="black">Length:</spam> ${vehicle[i].length}`;
      let datePopupPiloto = document.createElement('p');
      datePopupPiloto.innerHTML = `<spam class="black">Pilot:</spam> ${vehicle[i].pilot.name}`;

      let buttonClose = document.createElement('button');
      buttonClose.classList.add('btn__cerrar__popup');
      buttonClose.innerHTML = 'CLOSE';

      divOtherSub.appendChild(movieVehicle);
      divOtherSub.appendChild(divPopupContainer);
      divPopupContainer.appendChild(divPopup);
      divPopup.appendChild(divPopupImg);
      divPopup.appendChild(divPopupDescription);
      divPopupDescription.appendChild(datePopupH5);
      divPopupDescription.appendChild(datepopupDescripcion);
      divPopupDescription.appendChild(datePopupClass);
      divPopupDescription.appendChild(datePopuplength);
      divPopupDescription.appendChild(datePopupPiloto);
      divPopupDescription.appendChild(buttonClose);

      //ABRIR Y CERRAR POP UP / MODAL
      movieVehicle.addEventListener("click", function (e) {
          e.preventDefault();
          divPopupContainer.classList.add("active");
          divPopup.classList.add("active");
      });
      buttonClose.addEventListener("click", function (e) {
          e.preventDefault();
          divPopupContainer.classList.remove("active");
          divPopup.classList.remove("active");
      });

    }

  }
   // Despliega en la pantalla el contenedor del Main
   containerFilms.appendChild(peliContainer);
   // Despliega en la pantalla el contenedor del sectionFilm.
   peliContainer.appendChild(sectionFilm);
   // Despliega en la pantalla el contenedor donde iras las pestallas tab.
   peliContainer.appendChild(tabContainer);
   // Despliegue sección descripción:
   tabContainer.appendChild(inputDescription);
   tabContainer.appendChild(labelDescription);
   tabContainer.appendChild(divDescription);
   //Despliegue sección imagenes personajes:
   tabContainer.appendChild(inputCharacters);
   tabContainer.appendChild(labelCharacters);
   tabContainer.appendChild(divCharacters);
   //divCharacters.appendChild(divFilterAndCount);
   divCharacters.appendChild(divCharactersSub);
   //Despliegue sección vehiculos y locación:
   tabContainer.appendChild(inputOther);
   tabContainer.appendChild(labelOther);
   tabContainer.appendChild(divOther);
   divOther.appendChild(divOtherSub);
   // Despliega el footer
   body.appendChild(footerMain);
}

/***************** Div para cada pelicula *******************/

  fetch ('./data/ghibli/ghibli.json')
  .then(response => response.json())
  .then(data => {
   const dataFilms = data.films;

   const movie = (dataFilms) => {
    dataFilms.forEach(film => {
      const div = document.createElement('div');
      div.classList.add('subContenedorPelicula');
      div.innerHTML= `<img class="imgDirector"src="${film.poster}" alt="imagen" >
      <p class="titleDirector"> ${film.title}</p>
      <p class="parrafoDirector">Year:"${film.release_date}"</p>
      <p class="parrafoDirector">Director:"${film.director}"</p>
      <p class="parrafoDirector">Producer: "${film.producer}"</p> ` ;

      containerFilms.appendChild(div);

    /*****evento para cada pelicula */
      div.addEventListener("click", () => {
       newContainer(film);
      });
    });
   };
   movie(dataFilms);

   /**************Filtrar por Director******/
   filtersDirector.addEventListener("change", () => {
    const myMoviesDirec =(filterByDirector(data.films,filtersDirector.value));
    containerFilms.innerHTML = "";
    movie(myMoviesDirec);
    }),

    /**************Filtrar por Productor******/
   filtersProducer.addEventListener("change", () => {
    const myMoviesPro =(filterByProducer(data.films,filtersProducer.value));
    containerFilms.innerHTML = "";
    movie(myMoviesPro);
    });

    /*******Ordenar A-Z********** */
   const ordersAz = document.querySelector('.filters-Az');
   ordersAz.addEventListener('change', (event) =>{
   let ordenar;
   if (event.target.value === "A-Z"){
    ordenar = orderAz(data.films)
   }
   else {
    ordenar= orderZa(data.films)
   }
   containerFilms.innerHTML = "";
   movie(ordenar);
   });

/*******Ordenar Antiguo - Reciente ********** */
const ordersAnRe = document.querySelector('.filters-year');
ordersAnRe.addEventListener('change', (event) =>{
  let ordenarAsc;
  if (event.target.value === "Antiguo"){
    ordenarAsc = sortByAsc(data.films)
  }
  else {
    ordenarAsc= sortByDesc(data.films)
  }
  containerFilms.innerHTML = "";
  movie(ordenarAsc);
 })
})


 const dtaguibli = data.films
/*********** funcionalidad de boton graphic **************/

buttonGraphic.addEventListener('click', ()=>{
  containerFilms.className ="disabled";
  boxGraphic.className = "enabled";
})

 /************** Graficos ***************/

const elementMovies = compute(dtaguibli);
        let nameBestMovies = elementMovies.map((element) => {
            let titleBestMovies = element.title;
            return titleBestMovies;
        })
        let scoreBestMovies = elementMovies.map((element) => {
            let score = element.rt_score;
            return score;
        })


const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: nameBestMovies,  //eje en X
      datasets: [{
          label: 'score',   //eje en y
          data: scoreBestMovies,
          backgroundColor: [
            "#665191",
            "#a05195",
            "#d45087",
            "#f95d6a",
            "#ff7c43",
          ],
          borderColor: [
            "#665191",
            "#a05195",
            "#d45087",
            "#f95d6a",
            "#ff7c43",
          ],
          borderWidth: 3,
          borderRadius: 1
        }]
    },
    options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }

  })









