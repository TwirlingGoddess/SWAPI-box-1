import React, { Component } from 'react';
import '../../../reset.css'
import Background from '../Background/Background'
import CardDisplay from '../../Stateless/CardDisplay/CardDisplay'
import Header from '../Header/Header'
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      selectedData: [],
      loading: false,
      favorites:[] 
    }
  }

  makeApiCall = async (category) => {
    const url = `https://swapi.co/api/${category}`;
    const fetchURL = await fetch(url)
    const parseObject = await fetchURL.json()
    const cleanData = await this.cleanData(parseObject)
    await this.setState({
      selectedData: cleanData
    })
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
    const unresolvedPromises = parsedData.map( async(person, index) => {
      const keyList = 'people'
      const homeworld = await this.nestedFetch(person.homeworld)
      const homeworldName = homeworld.name
      const homeworldPopulation = homeworld.population
      const specieObj = await this.nestedFetch(person.species)
      const specie = specieObj.name
      const name = person.name;
      const id = keyList + index;
      return {id, keyList, homeworldName, homeworldPopulation, specie, name}
    })
    return Promise.all(unresolvedPromises)
  }

  planetObject = async (parsedData) => {
    const unresolvedPromises = parsedData.map(async(planet) => {
      const keyList = 'planets'     
      const planetName = planet.name;
      const planetTerrain = planet.terrain;
      const planetPopulation = planet.population;
      const planetClimate = planet.climate;
      const residents = await this.residentsFetch(planet.residents)
      return {keyList, planetName, planetTerrain, planetPopulation, planetClimate, residents}
    })
    return Promise.all(unresolvedPromises)
  }

  vehicleObject = (parsedData) => {
    const vehicleArray = parsedData.map((vehicle) => {
      const keyList = 'vehicles'    
      const vehicleName = vehicle.name;
      const vehicleModel = vehicle.model;
      const vehicleClass = vehicle.vehicle_class;
      const numberOfPassengers = vehicle.passengers;
      return {keyList, vehicleName, vehicleModel, vehicleClass, numberOfPassengers}
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

  findCard = (card) => {
    const selectedCard = this.state.selectedData.find(data => card.data.id === data.id)
    this.addCardToFavorites(selectedCard)
  }

  addCardToFavorites = (card) => {
    const currentFavorites = this.state.favorites;
    currentFavorites.push(card)
    this.setState({
      favorites: currentFavorites
    })  
  }


  render() {

    if (this.state.selectedData.length){
      return (
        <div>
          <Header makeApiCall={this.makeApiCall} 
              favoritesLength={this.state.favorites.length}
          />             
          <CardDisplay 
            selectedData={this.state.selectedData}
            findCard={this.findCard}
          />
        </div>
      )
    }
    
    else if (!this.state.selectedData.length){
      return (
        <div className="App">
          <Header 
            makeApiCall={this.makeApiCall} 
            favoritesLength={this.state.favorites.length}
          />   
          <Background />
        </div>
      );
    } 
      
  }
}

export default App;