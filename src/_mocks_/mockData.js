const mockVehicleApiResponse = {
  count: 39,
  next: 'https://swapi.co/api/vehicles/?page=2',
  previous: null,
  results: [
    {
      cargo_capacity: '50000',
      consumables: '2 months',
      cost_in_credits: '150000',
      created: '2014-12-10T15:36:25.724000Z',
      crew: '46',
      edited: '2014-12-22T18:21:15.523587Z',
      films: ['https://swapi.co/api/films/5/', 
        'https://swapi.co/api/films/1/'],
      length: '36.8',
      manufacturer: 'Corellia Mining Corporation',
      max_atmosphering_speed: '30',
      model: 'Digger Crawler',
      name: 'Sand Crawler',
      passengers: '30',
      pilots: [],
      url: 'https://swapi.co/api/vehicles/4/',
      vehicle_class: 'wheeled'
    }
  ]
};

const mockPeopleApiResponse = {
  count: 87,
  next: 'https://swapi.co/api/people/?page=2',
  previous: null,
  results: [
    {
      birth_year: '19BBY',
      created: '2014-12-09T13:50:51.644000Z',
      edited: '2014-12-20T21:17:56.891000Z',
      eye_color: 'blue',
      films: ['https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/'],
      gender: 'male',
      hair_color: 'blond',
      height: '172',
      homeworld: 'https://swapi.co/api/planets/1/',
      mass: '77',
      name: 'Luke Skywalker',
      skin_color: 'fair',
      species: ['https://swapi.co/api/species/1/'],
      starships: ['https://swapi.co/api/starships/12/',
        'https://swapi.co/api/starships/22/'],
      url: 'https://swapi.co/api/people/1/',
      vehicles: ['https://swapi.co/api/vehicles/14/',
        'https://swapi.co/api/vehicles/30/']
    }
  ]
};

const mockParseData = [
  {
    birth_year: '19BBY',
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
    eye_color: 'blue',
    films: ['https://swapi.co/api/films/2/',
      'https://swapi.co/api/films/6/',
      'https://swapi.co/api/films/3/'],
    gender: 'male',
    hair_color: 'blond',
    height: '172',
    homeworld: 'https://swapi.co/api/planets/1/',
    mass: '77',
    name: 'Luke Skywalker',
    skin_color: 'fair',
    species: ['https://swapi.co/api/species/1/'],
    starships: ['https://swapi.co/api/starships/12/', 
      'https://swapi.co/api/starships/22/'],
    url: 'https://swapi.co/api/people/1/',
    vehicles: ['https://swapi.co/api/vehicles/14/', 
      'https://swapi.co/api/vehicles/30/']
  }
];

const mockPlanetApiResponse = {
  count: 61,
  next: 'https://swapi.co/api/planets/?page=2',
  previous: null,
  results: [
    {
      climate: 'temperate',
      created: '2014-12-10T11:35:48.479000Z',
      diameter: '12500',
      edited: '2014-12-20T20:58:18.420000Z',
      films: ['https://swapi.co/api/films/6/', 
        'https://swapi.co/api/films/1/'],
      gravity: '1 standard',
      name: 'Alderaan',
      orbital_period: '364',
      population: '2000000000',
      residents: ['https://swapi.co/api/people/5/',
        'https://swapi.co/api/people/68/',
        'https://swapi.co/api/people/81/'],
      rotation_period: '24',
      surface_water: '40',
      terrain: 'grasslands, mountains',
      url: 'https://swapi.co/api/planets/2/'
    }
  ]
};

const mockPeopleObject = [{'Homeworld': undefined, 
  'Name': 'Luke Skywalker', 
  'Population': undefined, 
  'Specie': undefined, 'id': 
'people0', 
  'keyList': 'people'
}];

const mockPeopleObject2 = {
  'Homeworld': undefined, 
  'Name': 'Leia', 
  'Population': undefined, 
  'Specie': undefined, 'id': 
'people2', 
  'keyList': 'people'
};

const mockFavorites = [
  {'Homeworld': undefined, 
    'Name': 'Luke Skywalker', 
    'Population': undefined, 
    'Specie': undefined, 'id': 
'people0', 
    'keyList': 'people'
  },
  {
    'Homeworld': undefined, 
    'Name': 'Leia', 
    'Population': undefined, 
    'Specie': undefined, 'id': 
  'people2', 
    'keyList': 'people'
  }
];

const filmCrawlResponse = [{
  crawl: 'Film Crawl',
  title: 'Movie Title',
  date: '1982-09-18',
  opening_crawl: 'There is unrest in the Galactic'},
{
  crawl: 'Film Crawl',
  title: 'Movie Title',
  date: '1982-09-18',
  opening_crawl: 'There is unrest in the Galactic'
}];


const filmCrawl = {
  crawl: 'Film Crawl',
  title: 'Movie Title',
  date: '1982-09-18',
  opening_crawl: 'There is unrest in the Galactic'
};

const vehicleData = [{
  Class: 'sail barge',
  id: 'vehicles0',
  Model: 'Modified Luxury Sail Barge',
  Name: 'Sail barge',
  Passengers: '500',
  keyList: 'vehicles'
}];

const planetData = [{
  Climate: 'temperate',
  id: 'planets0',
  Name: 'Alderaan',
  Residents: 'Alderaan',
  Population: '2000000000',
  Terrain: 'grasslands, mountains',
  keyList: 'planets'
}];

const parsedVehicleData = [
  {
    'name': 'Sail barge',
    'model': 'Modified Luxury Sail Barge',
    'manufacturer': 'Ubrikkian Industries Custom Vehicle Division',
    'cost_in_credits': '285000',
    'length': '30',
    'max_atmosphering_speed': '100',
    'crew': '26',
    'passengers': '500',
    'cargo_capacity': '2000000',
    'consumables': 'Live food tanks',
    'vehicle_class': 'sail barge',
    'pilots': [],
    'films': [
      'https://swapi.co/api/films/3/'
    ],
    'created': '2014-12-18T10:44:14.217000Z',
    'edited': '2014-12-22T18:21:15.807906Z',
    'url': 'https://swapi.co/api/vehicles/24/'
  }
];

const parsedPlanetData = [
  {
    climate: 'temperate',
    created: '2014-12-10T11:35:48.479000Z',
    diameter: '12500',
    edited: '2014-12-20T20:58:18.420000Z',
    films: ['https://swapi.co/api/films/6/', 
      'https://swapi.co/api/films/1/'],
    gravity: '1 standard',
    name: 'Alderaan',
    orbital_period: '364',
    population: '2000000000',
    residents: ['https://swapi.co/api/people/5/',
      'https://swapi.co/api/people/68/',
      'https://swapi.co/api/people/81/'],
    rotation_period: '24',
    surface_water: '40',
    terrain: 'grasslands, mountains',
    url: 'https://swapi.co/api/planets/2/'
  }
];

export { mockPlanetApiResponse, 
  mockVehicleApiResponse, 
  mockPeopleApiResponse, 
  mockPeopleObject, 
  mockPeopleObject2,
  mockFavorites,
  filmCrawl,
  filmCrawlResponse,
  mockParseData,
  vehicleData,
  planetData,
  parsedVehicleData,
  parsedPlanetData
};

