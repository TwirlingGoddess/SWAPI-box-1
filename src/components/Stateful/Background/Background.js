import './Background.css'
import React, { Component } from 'react'

class Background extends Component  {
  constructor() {
    super()
    this.state = {
      randomCrawl: '',
      crawlTitle:'',
      cawlDate: ''
    }
  }

  componentDidMount () {
    fetch(`https://swapi.co/api/films`)
      .then((response) => response.json())
      .then(response => this.randomOpeningCrawl(response.results)).catch(error => { 
        console.error(error)
      });
  }
  
  randomOpeningCrawl = (films) => {
    const filmsLength = films.length
    const randomFilm = Math.floor(Math.random() * filmsLength) + 0;
    const randomCrawl = films[randomFilm].opening_crawl;
    const crawlTitle = films[randomFilm].title;
    const crawlDate = films[randomFilm].release_date;
    this.setState({randomCrawl})

  }

  render(){
    return (
      <div className='crawl board'>
        <section className="intro">
          A long time ago, in a galaxy far,far away.... 
        </section>
        <div className='content'>
          <h2 className='filmText'>{this.state.randomCrawl}</h2>
          <h2 className='filmText title'>{this.state.crawlTitle}</h2>
          <h2 className='filmText subtitle'>{this.state.crawlDate}</h2>
        </div>
      </div>
    )
  }
}
export default Background