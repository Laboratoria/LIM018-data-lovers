import { filterData } from '../src/data.js';
import data from './pokemon';

//import {data} from '../src/data/pokemon/pokemon.js'

/* describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});
 */

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
  console.log(data)
  const newArray = filterData(data, 'fire');
  it('dbería retornar solo fire para `types.fire`', () => {
    expect(newArray[0].name).toBe('charmander');
  });
});
