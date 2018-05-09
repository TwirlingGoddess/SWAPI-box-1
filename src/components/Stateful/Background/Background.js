import './Background.css'
import React, { Component } from 'react'
import mainAudio from '../../../assets/star-wars-theme-song.mp3'

class Background extends Component  {
  constructor() {
    super()
    this.state = {
      randomCrawl: '',
      crawlTitle:'',
      crawlDate: ''
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
    this.setState({
      randomCrawl,
      crawlTitle,
      crawlDate
    })

  }

  render(){
    return (
      <div>
        <section className="intro">
          A long time ago, in a galaxy far, far away.... 
        </section>
        <div className='crawl board'>
          <div className='content'>
            <h2 className='filmText'>{this.state.randomCrawl}</h2>
            <h2 className='filmText title'>{this.state.crawlTitle}</h2>
            <h2 className='filmText subtitle'>{this.state.crawlDate}</h2>
          </div>
        </div>
        <audio className="mainAudio" autoPlay loop>
          <source src={mainAudio} />
      </audio>
      </div>
    )
  }
}
export default Background