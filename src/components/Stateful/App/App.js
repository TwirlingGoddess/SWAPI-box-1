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
      selectedData: [] 
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
    const unresolvedPromises = parsedData.map( async(person) => {
      const homeworld = await this.homeworldFetch(person.homeworld)
      const homeworldName = homeworld.name
      const homeworldPopulation = homeworld.population
      const specie = await this.specieFetch(person.species)
      const name = person.name;
      return {homeworldName, homeworldPopulation, specie, name}
    })
    return Promise.all(unresolvedPromises)
  }

  specieFetch = async (specie) => {
    const fetchSpecie = await fetch(specie)
    const parseSpecie = await fetchSpecie.json()
    return parseSpecie.name
  }

  homeworldFetch = async (homeworld) => {
    const fetchHomeworld = await fetch(homeworld)
    const parseHomeworld = await fetchHomeworld.json()
    return parseHomeworld
  }



  planetObject = (parsedData) => {
    // console.log(parsedData)
    // const unresolvedPromises = parsedData.map(async planet => {
    //   return planet
    // })

    // console.log(unresolvedPromises)
    // const unresolvedPromises = parsedData.map(async person => {
    //   const fetchHomeworld = await fetch(person.homeworld)
    //   const parseHomeworld = await fetchHomeworld.json();
    //   return {...parseHomeworld, ...person}
    // })
    // return Promise.all(unresolvedPromises)
  }

  vehicleObject = (parsedData) => {
    const vehicleArray = parsedData.map((vehicle) => {
      const name = vehicle.name;
      const vehicleModel = vehicle.model;
      const vehicleClass = vehicle.vehicle_class;
      const numberOfPassenger = vehicle.numberOfPassenger;
      console.log({name, vehicleModel, vehicleClass, numberOfPassenger})
      return {name, vehicleModel, vehicleClass, numberOfPassenger}
    })
    return vehicleArray
  }


  render() {
    if(this.state.selectedData.length){
      return (
        <div>
          <Header makeApiCall={this.makeApiCall} />          
          <CardDisplay selectedData={this.state.selectedData}/>
        </div>
      )
    }

    else {
      return (
        <div className="App">
          <Header makeApiCall={this.makeApiCall} />
          <Background />
        </div>
      );
    } 
    
  }
}

export default App;
