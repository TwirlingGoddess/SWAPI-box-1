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

  makeApiCall = (category) => {
    const url = `https://swapi.co/api/${category}`;
    fetch(url)
      .then((response) => response.json())
      .then(response => this.cleanData(response))
      .then((data) => this.setState({
        selectedData: data
      }))
      .catch(error => { 
        console.error(error)
      });
  }

  cleanData = (dataObject) => {
    if(dataObject.next.includes('people')){
      return this.peopleObject(dataObject.results)
    }
    if(dataObject.next.includes('planets')){
      return this.planetObject(dataObject.results)
    }
    if(dataObject.next.includes('vehicles')){
      return this.vehicleObject(dataObject.results)
    }
  }

  peopleObject = (parsedData) => {
    const unresolvedPromises = parsedData.map(async person => {
      const fetchHomeworld = await fetch(person.homeworld)
      const parseHomeworld = await fetchHomeworld.json();
      return {...parseHomeworld, ...person}
    })
    return Promise.all(unresolvedPromises)
  }

  planetObject = (parsedData) => {
    // const unresolvedPromises = parsedData.map(async person => {
    //   const fetchHomeworld = await fetch(person.homeworld)
    //   const parseHomeworld = await fetchHomeworld.json();
    //   return {...parseHomeworld, ...person}
    // })
    // return Promise.all(unresolvedPromises)
    console.log(parsedData.results,'in planet')
    
  }

  vehicleObject = (parsedData) => {
    // const unresolvedPromises = parsedData.map(async person => {
    //   const fetchHomeworld = await fetch(person.homeworld)
    //   const parseHomeworld = await fetchHomeworld.json();
    //   return {...parseHomeworld, ...person}
    // })
    // return Promise.all(unresolvedPromises)
    console.log(parsedData.results,'in vehicle')
    
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

    return (
      <div className="App">
        <Header makeApiCall={this.makeApiCall} />
        <Background />
      </div>
    );
  }
}

export default App;
