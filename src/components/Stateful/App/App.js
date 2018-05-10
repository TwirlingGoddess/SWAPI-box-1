import React, { Component } from 'react';
import '../../../reset.css'
import Intro from '../Intro/Intro'
import CardDisplay from '../../Stateless/CardDisplay/CardDisplay'
import { NavLink, Route } from 'react-router-dom'
import Header from '../../Stateless/Header/Header'
import Helper from '../../Helper/Helper'
import Load from '../../Stateless/Load/Load'
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      favorites:[],
      selectedData: [],
      loading: false,
      helper: new Helper()
    }
  }

  makeApiCall = async (category) => {
    this.setState({loading:true})
    const selectedCategory = await this.state.helper.makeApiCall(category);
    await this.state.helper.sendToLocalStorage('selectedData', selectedCategory)
    return this.setState({
      selectedData: selectedCategory,
      loading: false
    })
  }

  sendToLocalStorage = (selectedData) => {
    this.state.helper.sendToLocalStorage('favorites', selectedData)
  }

  componentDidMount() {
    let favoriteCards = this.state.helper.getFromLocalStorage('favorites');
    let savedData = this.state.helper.getFromLocalStorage('selectedData');
    this.setState({
      favorites: favoriteCards || [],
      selectedData: savedData || []
    })
  }

  findCard = (card) => {
    const selectedCard = this.state.selectedData.find(data => card.id === data.id)
    this.addCardToFavorites(selectedCard)
  }

  addCardToFavorites = (card) => {
    const currentFavorites = this.state.favorites;
    const duplicate = currentFavorites.some(favCard => {
      return favCard.id === card.id;
    });
    if (!duplicate){
      currentFavorites.push(card)
      this.sendToLocalStorage(currentFavorites)     
    } else {
      let index = currentFavorites.indexOf(card)
      currentFavorites.splice(index, 1)
    }
    this.setState({
      favorites: currentFavorites
    })  
  }	   

  displayFavorites = () => {
    const favoriteCards = this.state.favorites;
    if (!favoriteCards.length){
      this.setState({
        selectedData: null
      })
    } else {
      this.setState({
        selectedData: favoriteCards
      })
    }
  }

  render() {
    const {selectedData, favorites} = this.state;

    <Route exact path='/' component={Intro} />
    if (this.state.loading === true) {
      return (
        <Load />
      )
    }

    if (this.state.selectedData === null) {
      return (
        <div>
          <h3>Addddddd</h3>
        </div>
      )
    }

    if (this.state.selectedData.length && this.state.loading === false){
      return (
        <div>
          <Header makeApiCall={this.makeApiCall} 
            favoritesLength={favorites.length}
            displayFavorites={this.displayFavorites}
          />             
          <CardDisplay 
            selectedData={selectedData}
            findCard={this.findCard}
            favorites={this.state.favorites}
          />
        </div>
      )
    }
    
    else if (!selectedData.length){
      return (
        <div className="App">
          <Header 
            makeApiCall={this.makeApiCall} 
            favoritesLength={favorites.length}
            displayFavorites={this.displayFavorites}          
          />   
          <Intro />
        </div>
      );
    } 
      
  }
}

export default App;
