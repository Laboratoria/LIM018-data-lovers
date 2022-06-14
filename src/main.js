import { example } from './data.js';
//import data from './data/ghibli/ghibli.js';

//console.log(fetch('https://ghibliapi.herokuapp.com/films'));
fetch('./data/ghibli/ghibli.json/')
 .then(response => {
    if (response.ok) {
    console.log('success')
 }else{
    console.log('error')
 }
 response.json()
 })
 .then(data => console.log(data));
//console.log(example, data);
