import { filterByDirector,filterByProducer, orderAz, orderZa, sortByAsc, sortByDesc} from '../src/data.js';

const data = [
  {
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
    "release_date": "1986",
  },
  {
    "title": "Grave of the Fireflies",
    "director": "Isao Takahata",
    "producer": "Toru Hara",
    "release_date": "1988",
  },
  {
    "title": "Kiki's Delivery Service",
    "director": "Hayao Miyazaki",
    "release_date": "1989"
  },
  {
    "title": "From Up on Poppy Hill",
    "director": "Gorō Miyazaki",
    "release_date": "1990"
  }
]

//*********funcion  filtrar por director */
describe(filterByDirector, () => {
  it('is a function', () => {
    expect(typeof filterByDirector).toBe('function');
  });

  it('return las peliculas de director Hayao Miyazaki', () => {
    let Director = filterByDirector(data, ["Hayao Miyazaki"]);
    expect(Director[0].title).toBe('Castle in the Sky');
  });
});

//*********funcion  filtrar por productor */
describe(filterByProducer, () => {
  it('is a function', () => {
    expect(typeof filterByProducer).toBe('function');
  });

  it('return las peliculas de productor Toru Hara', () => {
    let productor = filterByProducer(data, ["Toru Hara"]);
    expect(productor[0].title).toBe('Grave of the Fireflies');
  });
});

//*********funcion  ordenar de AZ */
describe(orderAz, () => {
  it('is a function', () => {
    expect(typeof orderAz).toBe('function');
  });
  it('return peliculas ordenadas de A a Z', () => {
    let ordenadoAz = orderAz(data);
    expect(ordenadoAz[0].title).toBe('Castle in the Sky');
    expect(ordenadoAz[1].title).toBe('From Up on Poppy Hill');
    expect(ordenadoAz[2].title).toBe('Grave of the Fireflies');
    expect(ordenadoAz[3].title).toBe('Kiki\'s Delivery Service');
  });
});

//*********funcion  ordenar de ZA */
describe(orderZa, () => {
  it('is a function', () => {
    expect(typeof orderZa).toBe('function');
  });
  it('return peliculas ordenadas de Z a A', () => {
    let ordenadoZa = orderZa(data);
    expect(ordenadoZa[0].title).toBe('Kiki\'s Delivery Service');
    expect(ordenadoZa[1].title).toBe('Grave of the Fireflies');
    expect(ordenadoZa[2].title).toBe('From Up on Poppy Hill');
    expect(ordenadoZa[3].title).toBe('Castle in the Sky');
  });
});

//*********funcion  ordenar Antiguo**********************************
describe(sortByAsc, () => {
  it('is a function', () => {
    expect(typeof sortByAsc).toBe('function');
  });
  it('return peliculas ordenadas Antiguo ', () => {
    let ordenadoAño = sortByAsc(data);
    expect(ordenadoAño[0].title).toBe('Castle in the Sky');
    expect(ordenadoAño[1].title).toBe('Grave of the Fireflies');
    expect(ordenadoAño[2].title).toBe('Kiki\'s Delivery Service');
    expect(ordenadoAño[3].title).toBe('From Up on Poppy Hill');
  });
});

//*********funcion  ordenar por Reciente******************************
describe(sortByDesc, () => {
  it('is a function', () => {
    expect(typeof sortByDesc).toBe('function');
  });
  it('return peliculas ordenadas Reciente', () => {
    let ordenadoAñoD = sortByDesc(data);
    expect(ordenadoAñoD[0].title).toBe('From Up on Poppy Hill');
    expect(ordenadoAñoD[1].title).toBe('Kiki\'s Delivery Service');
    expect(ordenadoAñoD[2].title).toBe('Grave of the Fireflies');
    expect(ordenadoAñoD[3].title).toBe('Castle in the Sky');
  });
});
