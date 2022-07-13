import { ordeName } from '../src/data.js';


// describe('filtrarBuscador', () => {
//   it('should by a function', () => {
//     expect(typeof filtrarBuscador).toBe('function');
//   });

//   it('returns buscar el personaje', () => {
//     const character = [
//       {name:"a"},
//       {name:"b"},
//       {name:"c"},
//     ]
 
//     expect(filtrarBuscador(character,"a")).toEqual([{name:'a'}]);
//   });
// });


describe('ordeName', () => {

  const dataExample = [
    {name:"rick"}, 
    {name:"morty"},
    {name:"alexander"},
    {name:"chris"}];

  const dataExample2 = [
    {name:"conroy"}, 
    {name:"fido"},
    {name:"doofus"},
    {name:"morty"}];
 
  it('is a function', () => {
    expect(ordeName(dataExample)).toEqual([
      {name:"alexander"}, 
      {name:"chris"},
      {name:"morty"},
      {name:"rick"}     
    ]);

    expect(ordeName(dataExample2)).toEqual([
        {name:"conroy"}, 
        {name:"doofus"},
        {name:"fido"},
        {name:"morty"}     
      ]);

    // expect(ordeName(dataExample,'ZA')).toEqual([
    //   {name:"rick"}, 
    //   {name:"morty"},
    //   {name:"chris"},
    //   {name:"alexander"}     
    // ]);
  });

  // it('Debería retornar ["ada", "berta", "coni", "dora"] para ["berta", "coni", "ada", "dora"]', () => {
  //   expect(ordeName(dataExample.name),"AZ").toEqual(["ada", "berta", "coni", "dora"]);
  // });

  // it('Debería retornar ["alexander" , "chris", "morty", "rick"] para ["rick", "morty", "alexander", "chris"]', () => {
  //   expect(ordeName(dataExample2.name)).toEqual(["alexander" , "chris", "morty", "rick"]);
  // });
});


