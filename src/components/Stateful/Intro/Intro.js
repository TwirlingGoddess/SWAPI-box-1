import './Intro.css'
import React, { Component } from 'react'
import mainAudio from '../../../assets/star-wars-theme-song.mp3'


class Intro extends Component  {
  constructor() {
    super()
    this.state = {
      randomCrawl: '',
      crawlTitle:'',
      crawlDate: ''
    }
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(`https://swapi.co/api/films`)
      const data = await response.json()
      const selectedFilm = await this.randomOpeningCrawl(data.results)
    }
    catch (error) { 
      throw new Error(error.message);
    };
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
          </div>
          <div className='introTitle'>
            {this.state.crawlTitle}, {this.state.crawlDate}
          </div>
        </div>
        <audio className="mainAudio" autoPlay loop>
          <source src={mainAudio} />
        </audio>
      </div>
    )
  }
}


export default Intro