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
    const homeworldName = homeworld.name;
    const homeworldPopulation = homeworld.population;
    const specieObj = await nestedFetch(person.species);
    const specie = specieObj.name;
    const name = person.name;
    const id = keyList + index;
    return {id, keyList, Homeworld: homeworldName, Population: homeworldPopulation, Specie: specie, Name:name};
  });
  return Promise.all(unresolvedPromises);
}


export const planetObject = async (parsedData) => {
  const unresolvedPromises = parsedData.map(async(planet,index) => {
    const keyList = 'planets';  
    const planetName = planet.name;
    const planetTerrain = planet.terrain;
    const planetPopulation = planet.population;
    const planetClimate = planet.climate;
    const residents = await residentsFetch(planet.residents);
    const id = keyList + index;
    return {id, keyList, Name: planetName, Terrain: planetTerrain, Population: planetPopulation, Climate: planetClimate, Residents: residents};
  });
  return Promise.all(unresolvedPromises);
}

export const vehicleObject = (parsedData) => {
  const vehicleArray = parsedData.map((vehicle, index) => {
    const keyList = 'vehicles'; 
    const vehicleName = vehicle.name;
    const vehicleModel = vehicle.model;
    const vehicleClass = vehicle.vehicle_class;
    const numberOfPassengers = vehicle.passengers;
    const id = keyList + index;
    return {id, keyList, Name: vehicleName, Model: vehicleModel, Class: vehicleClass, Passengers:numberOfPassengers};
  });
  return vehicleArray;
}

export const nestedFetch = async (url) => {
  const fetchURL= await fetch(url);
  const parseObject= await fetchURL.json();
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

export const makeApiCall = async (category) => {
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
