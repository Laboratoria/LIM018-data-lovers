import {filterEspecies,filtrarBuscador,filterid,ordeName} from '../src/data.js';

const especiesData = [
  {
    name : "Rick Sanchez",
    status: "Alive",
    species: "Human",
  },
  {
    name : "Morty Smith",
    status: "Alive",
    species: "robot",
  },
  {
    name: "Summer Smith",
    status: "Alive",
    species: "vampire",
  }];
 describe('filtradoPorEspecie', () => {
  it('filterEspecie', () => {
    const especies = [
      {
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human"
    }
    ];
    const arrEspecies = filterEspecies(especiesData,"Human");
  
    expect(arrEspecies).toEqual(especies);
    // expect(arrEspecies.length).tobe(1)
  })
})

const filtrandoId = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  }];
  describe('filtramosPersonajesporSuIdEnLaVentanaModal',()=> {
    it('filterId',()=>{
      const Id = [
        {
          id: 1,
        }];
        const arrId= filterid(filtrandoId,1);
        expect(arrId).toEqual(Id);
    })
  })

  describe('filtrarBuscador', () => {
    it('should by a function', () => {
      expect(typeof filtrarBuscador).toBe('function');
    });
  
    it('returns buscar el personaje', () => {
      const character = [
        {name:"a"},
        {name:"b"},
        {name:"c"},
      ]
   
      expect(filtrarBuscador(character,"a")).toEqual([{name:'a'}]);
    });
  });

  
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
  
    });
  
   });
