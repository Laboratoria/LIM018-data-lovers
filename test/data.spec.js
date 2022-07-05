import { sortData, filterData, mapedData , computeStats} from '../src/data.js';
import { 
  dataTest, 
  filterByType, 
  filterByGeneration, 
  filterByEgg, 
  filterByRarity, 
  basicInfo, 
  orderByNameAsc, 
  orderByNameDesc,  
  orderByLenghtWeaknessesAsc, 
  orderByLenghtWeaknessesDesc,
  computeStatsData,
  computeStatsCelebi,
  computeStatsBulbasaur
} from './pokemon';

// test para filterData
describe('filterData', () => {
  it('debería ser una función', () => {
    expect(typeof filterData).toBe('function');
  });

  it('dataTest debería retornar un objeto', () => {
    expect(typeof dataTest).toBe('object');
  });

  it('filterData debería retornar los pokemones tipo `fire`', () => {
    expect(filterData(dataTest, 'fire')).toEqual(filterByType);
  });

  it('filterData debería retornar los pokemones de generación `johto`', () => {
    expect(filterData(dataTest, 'johto')).toEqual(filterByGeneration);
  });

  it('filterData debería retornar los pokemones con egg `not in eggs`', () => {
    expect(filterData(dataTest, 'not in eggs')).toEqual(filterByEgg);
  });

  it('filterData debería retornar los pokemones con rarity `legendary`', () => {
    expect(filterData(dataTest, 'legendary')).toEqual(filterByRarity);
  });

  it('filterData debería retornar la data si no se cumplen las condiciones', () => {
    expect(filterData(dataTest, '')).toEqual(dataTest);
  });
});

//test para mapedData
describe('mapedData', () => {
  it('mapedData deberia ser una funcion', () =>{
    expect(typeof mapedData).toBe('function')
  });

  it('mapedData deberia retornar un objeto', ()=> {
    expect(typeof basicInfo).toBe('object')
  });

  it('mapedData deberia retornar informacion basica', () => {
    expect(mapedData(dataTest)).toEqual(basicInfo)
  })
});

//test para sortData
describe('sortData', () => {
  it('sortData deberia ser una funcion', () => {
    expect(typeof sortData).toBe('function');
  });
  it('sortData deberia retornar un objeto', () => {
    expect(typeof orderByNameAsc).toBe('object');
  });
  it('sortData deberia retornar una arreglo ordenado por nombre de manera ascendente', () => {
    expect(sortData(dataTest,'name','asc')).toEqual(orderByNameAsc);
  });
  it('sortData deberia retornar una arreglo ordenado por nombre de manera descendente', () => {
    expect(sortData(dataTest,'name','desc')).toEqual(orderByNameDesc);
  });
  it('sortData deberia retornar una arreglo ordenado por weaknesses de manera ascendente', () => {
    expect(sortData(dataTest,'weaknesses','asc')).toEqual(orderByLenghtWeaknessesAsc);
  });
  it('sortData deberia retornar una arreglo ordenado por weaknesses de manera descendente', () => {
    expect(sortData(dataTest,'weaknesses','desc')).toEqual(orderByLenghtWeaknessesDesc);
  });

  it('sortData debería retornar la data si no se cumplen las condiciones', () => {
    expect(sortData(dataTest, '','')).toEqual(dataTest);
  });
});


// test para computeStats
describe('computeStats', ()=>{
  it('computeStats deberia ser una funcion', () =>{
    expect(typeof computeStats).toBe('function');
  });
  it('computeStats deberia retornar un objeto', () => {
    expect(typeof computeStatsData).toBe('object');
  });

  it('computeStats deberia retornar un objeto', () => {
    expect(typeof computeStatsData).toBe('object');
  });

  it('computeStats para Bulbasaur deberia retornar un array de objetos que contengan stas', () => {
    expect(computeStats(computeStatsData.pokemon[0])).toEqual(computeStatsBulbasaur);
  });

  it('computeStats para celebi deberia retornar un array de objetos que contengan stas', () => {
    expect(computeStats(computeStatsData.pokemon[1])).toEqual(computeStatsCelebi);
  });
});
