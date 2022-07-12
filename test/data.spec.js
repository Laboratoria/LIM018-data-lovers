import { filtrarBuscador } from '../src/data.js';


// describe('filterEspecies', () => {
//   it('deberia ser una funcion', () => {
//     expect(typeof filterEspecies).toBe('function');
//   });

//   it('retorna `los especies filtrados`', () => {
//       const especie [
//         {"species":"Human"},
//          {"species": "Alien"},
//          {"species": "Vampire"},
//       ]
//     expect(filterEspecies(especie,Human)).toBe([{"species":'Human'}]);
//   });
// });


describe('filtrarBuscador', () => {
  it('should by a function', () => {
    expect(typeof filtrarBuscador).toBe('function');
  });

  it('returns buscar el personaje', () => {
    const character = [
      {"name":"a"},
      {"name":"b"},
      {"name":"c"},
    ]
    expect(filtrarBuscador(character,"a")).toBe([{"name":'a'}]);
  });
});
