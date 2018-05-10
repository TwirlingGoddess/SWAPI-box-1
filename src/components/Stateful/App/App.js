import React, { Component } from 'react';
import '../../../reset.css'
import Intro from '../Intro/Intro'
import CardDisplay from '../../Stateless/CardDisplay/CardDisplay'
import Header from '../Header/Header'
import Helper from '../../Helper/Helper'
import Load from '../../Stateless/Load/Load'
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      favorites:[],
      selectedData: [],
      loading: false,
      helper: new Helper()
    }
  }

  makeApiCall = async (category) => {
    this.setState({loading:true})
    const selectedData = await this.state.helper.makeApiCall(category)
    return this.setState({
      selectedData: selectedData,
      loading: false
    })
  }

  sendToLocalStorage = (selectedData) => {
    localStorage.setItem('favorites', JSON.stringify(selectedData));
  }

  componentDidMount() {
    let favoriteCards = localStorage.getItem('favorites');
    let parseFavCards = ('favorites', JSON.parse(favoriteCards));
    this.setState({
      favorites: parseFavCards || []
    })
  }

  findCard = (card) => {
    const selectedCard = this.state.selectedData.find(data => card.data.id === data.id)
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
            favoritesLength={this.state.favorites.length}
            displayFavorites={this.displayFavorites}
          />             
          <CardDisplay 
            selectedData={this.state.selectedData}
            findCard={this.findCard}
            favorites={this.state.favorites}
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
            displayFavorites={this.displayFavorites}          
          />   
          <Intro />
        </div>
      );
    } 
      
  }
}

export default App;
