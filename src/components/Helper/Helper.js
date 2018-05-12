import React from 'react';

export const cleanDataFunc = (dataObject) => {
  if (dataObject.next.includes('people')) {
    return peopleObject(dataObject.results);
  }
  if (dataObject.next.includes('planets')) {
    return planetObject(dataObject.results);
  }
  if (dataObject.next.includes('vehicles')) {
    return vehicleObject(dataObject.results);
  }
}

export const peopleObject = async (parsedData) => {
  const unresolvedPromises = parsedData.map( async(person,index) => {
    const keyList = 'people';
    const homeworld = await nestedFetch(person.homeworld);
    const specieObj = await nestedFetch(person.species);
    const id = keyList + index;
    return {id, keyList, Homeworld: homeworld.name, Population: homeworld.population, Specie: specieObj.name, Name: person.name};
  });
  return Promise.all(unresolvedPromises);
}


export const planetObject = async (parsedData) => {
  const unresolvedPromises = parsedData.map(async(planet,index) => {
    const keyList = 'planets';  
    const residents = await residentsFetch(planet.residents);
    const id = keyList + index;
    return {id, keyList, Name: planet.name, Terrain: planet.terrain, Population: planet.population, Climate: planet.climate, Residents: residents};
  });
  return Promise.all(unresolvedPromises);
}

export const vehicleObject = (parsedData) => {
  const vehicleArray = parsedData.map((vehicle, index) => {
    const keyList = 'vehicles'; 
    const id = keyList + index;
    return {id, keyList, Name: vehicle.name, Model: vehicle.model, Class: vehicle.vehicle_class, Passengers: vehicle.passengers};
  });
  return vehicleArray;
}

export const nestedFetch = async (url) => {
  const fetchURL = await fetch(url);
  const parseObject = await fetchURL.json();
  return parseObject;
}

export const residentsFetch = async (residentsUrls) => {
  const unresolvedPromises = residentsUrls.map(async(url) => {
    const residentURLfetch = await fetch(url);
    const parseResidents = await residentURLfetch.json();
    return parseResidents.name;
  });
  return Promise.all(unresolvedPromises);
}

export const makeApiCall = (category) => {
  const url = `https://swapi.co/api/${category}`;
  return apiCall(url)
}

 export const apiCall = async (url) => {
  const fetchURL = await fetch(url);
  const parseObject = await fetchURL.json();
  const cleanData = await cleanDataFunc(parseObject);
  sendToLocalStorage(url, cleanData);
  return cleanData;
 }

export const sendToLocalStorage = (key, selectedData) => {
  localStorage.setItem(key, JSON.stringify(selectedData));
}

export const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
}
