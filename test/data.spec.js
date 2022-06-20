import { 
 // sortData, 
  filterData,
 // mapedData 
} from '../src/data.js';
import { dataTest, filterByType, filterByGeneration, filterByEgg } from './pokemon';

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