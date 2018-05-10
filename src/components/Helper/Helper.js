import React, { Component } from 'react'

class Helper extends Component {
  constructor () {
    super ()
  }

  makeApiCall = async (category) => {
    const url = `https://swapi.co/api/${category}`;
    const fetchURL = await fetch(url)
    const parseObject = await fetchURL.json()
    const cleanData = await this.cleanData(parseObject)
    this.sendToLocalStorage(url, cleanData)
    return cleanData;
  }
 
  cleanData = async (dataObject) => {
    if(dataObject.next.includes('people')){
      return await this.peopleObject(dataObject.results)
    }
    if(dataObject.next.includes('planets')){
      return this.planetObject(dataObject.results)
    }
    if(dataObject.next.includes('vehicles')){
      return await this.vehicleObject(dataObject.results)
    }
  }

  peopleObject = async (parsedData) => {
    const unresolvedPromises = parsedData.map( async(person,index) => {
      const keyList = 'people'
      const homeworld = await this.nestedFetch(person.homeworld)
      const homeworldName = homeworld.name
      const homeworldPopulation = homeworld.population
      const specieObj = await this.nestedFetch(person.species)
      const specie = specieObj.name
      const name = person.name;
      const id = keyList + index;
      return {id, keyList, Homeworld: homeworldName, Population: homeworldPopulation, Specie: specie, Name:name}
    })
    return Promise.all(unresolvedPromises)
  }

  
  planetObject = async (parsedData) => {
    const unresolvedPromises = parsedData.map(async(planet,index) => {
      const keyList = 'planets'  
      const planetName = planet.name;
      const planetTerrain = planet.terrain;
      const planetPopulation = planet.population;
      const planetClimate = planet.climate;
      const residents = await this.residentsFetch(planet.residents)
      const id = keyList + index;
      return {id, keyList, Name: planetName, Terrain: planetTerrain, Population: planetPopulation, Climate: planetClimate, Residents: residents}
    })
    return Promise.all(unresolvedPromises)
  }

  vehicleObject = (parsedData) => {
    const vehicleArray = parsedData.map((vehicle, index) => {
      const keyList = 'vehicles' 
      const vehicleName = vehicle.name;
      const vehicleModel = vehicle.model;
      const vehicleClass = vehicle.vehicle_class;
      const numberOfPassengers = vehicle.passengers;
      const id = keyList + index;
      return {id, keyList, Name: vehicleName, Model: vehicleModel, Class: vehicleClass, Passengers:numberOfPassengers}
    })
    return vehicleArray;
  }

  nestedFetch = async (url) => {
    const fetchURL= await fetch(url)
    const parseObject= await fetchURL.json()
    return parseObject;
  }

  residentsFetch = async (residentsUrls) => {
    const unresolvedPromises = residentsUrls.map(async(url) => {
      const residentURLfetch = await fetch(url)
      const parseResidents = await residentURLfetch.json()
      return parseResidents.name;
    })
    return Promise.all(unresolvedPromises)
  }

  sendToLocalStorage = (key, selectedData) => {
    localStorage.setItem(key, JSON.stringify(selectedData));
  }

  getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
  }


}

export default Helper