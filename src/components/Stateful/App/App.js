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
    fetch(`https://swapi.co/api/${category}`)
      .then((response) => response.json())
      .then(response => this.cleanData(response.results)).catch(error => { 
        console.error(error)
      });
  }

  cleanData = (dataObject) => {
    this.setState({selectedData:dataObject})
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
