import { 
  sortData, 
  filterData,
  mapedData
} from '../src/data.js';
import { dataTest, filterByType, filterByGeneration, filterByEgg, basicInfo, orderByNameAsc, orderByNameDesc, orderByLenghtWeaknessesAsc, orderByLenghtWeaknessesDesc} from './pokemon';

// test para filterData
describe('filtrar por tipo de elemento', () => {
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

});


describe('mapedData', () => {
  it('mapedData deberia ser una funcion', () =>{
    expect(typeof mapedData).toBe('function')
  });

  it('mapedData deberia retornar un objeto', ()=> {
    expect(typeof basicInfo).toBe('object')
  })

  it('mapedData deberia retornar informacion basica', () => {
    expect(mapedData(dataTest)).toEqual(basicInfo)
  })
});

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
  it('sortData deberia retornar una arreglo ordenado por nombre de manera ascendente', () => {
    expect(sortData(dataTest,'weaknesses','asc')).toEqual(orderByLenghtWeaknessesAsc);
  });
  it('sortData deberia retornar una arreglo ordenado por nombre de manera descendente', () => {
    expect(sortData(dataTest,'weaknesses','desc')).toEqual(orderByLenghtWeaknessesDesc);
  });
})