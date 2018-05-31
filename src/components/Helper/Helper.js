

class Helper {
  
  makeApiCall = (category) => {
    const url = `https://swapi.co/api/${category}`;
    return this.apiCallHelper(url);
  }

cleanDataFunc = (dataObject) => {
  if (dataObject.next.includes('people')) {
    return this.peopleObject(dataObject.results);
  }
  if (dataObject.next.includes('planets')) {
    return this.planetObject(dataObject.results);
  }
  if (dataObject.next.includes('vehicles')) {
    return this.vehicleObject(dataObject.results);
  }
}

peopleObject = async (parsedData) => {
  const unresolvedPromises = parsedData.map( async(person, index) => {
    const keyList = 'people';
    const homeworld = await this.nestedFetch(person.homeworld);
    const specieObj = await this.nestedFetch(person.species);
    const id = keyList + index;
    return {id, keyList, 
      Homeworld: homeworld.name, 
      Population: homeworld.population, 
      Specie: specieObj.name, 
      Name: person.name};
  });
  return Promise.all(unresolvedPromises);
}


planetObject = async (parsedData) => {
  const unresolvedPromises = parsedData.map(async(planet, index) => {
    const keyList = 'planets';  
    const residents = await this.residentsFetch(planet.residents);
    const id = keyList + index;
    return {id, keyList, 
      Name: planet.name, 
      Terrain: planet.terrain, 
      Population: planet.population, 
      Climate: planet.climate, 
      Residents: residents};
  });
  return Promise.all(unresolvedPromises);
}

vehicleObject = (parsedData) => {
  const vehicleArray = parsedData.map((vehicle, index) => {
    const keyList = 'vehicles'; 
    const id = keyList + index;
    return {id, 
      keyList, 
      Name: vehicle.name, 
      Model: vehicle.model, 
      Class: vehicle.vehicle_class,  
      Passengers: vehicle.passengers};
  });
  return vehicleArray;
}

nestedFetch = async (url) => {
  const fetchURL = await fetch(url);
  const parseObject = await fetchURL.json();
  return parseObject;
}

residentsFetch = async (residentsUrls) => {
  const unresolvedPromises = residentsUrls.map(async(url) => {
    const residentURLfetch = await fetch(url);
    const parseResidents = await residentURLfetch.json();
    return parseResidents.name;
  });
  return Promise.all(unresolvedPromises);
}


apiCallHelper = async (url) => {
  try {
    const response = await fetch(url);
    const parseObject = await response.json();
    const cleanData = await this.cleanDataFunc(parseObject);
    this.sendToLocalStorage(url, cleanData);
    return cleanData;
  } catch (error) {
    throw new Error(error.message);
  }
};

sendToLocalStorage = (key, selectedData) => {
  localStorage.setItem(key, JSON.stringify(selectedData));
}

getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

}

export default Helper; 