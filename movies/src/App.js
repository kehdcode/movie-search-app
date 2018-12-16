import React, { Component } from 'react';
import './App.css';
import MovieRow from './movieRow.js';

class App extends Component {
  constructor(props){
    super(props)

    const movies = [
      {id: 0, title: "Avengers", overview: "lorem ispum ispumdthev irumpuson tgckubhdiubbib", poster_src:"https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg" },
               {id: 1, title: "Infinity wars",  overview: "lorem ispum ispumdthev irumpuson tgckubhdiubbib", poster_src: "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"},
               {id:2, title: "SuperMan",  overview: "lorem ispum ispumdthev irumpuson tgckubhdiubbib", poster_src: "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"},
               {id: 3, title: "BatMan",  overview: "lorem ispum ispumdthev irumpuson tgckubhdiubbib", poster_src: "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"}
    ]
    
    var movieRows = []
    movies.forEach((movie) => {
      console.log(movie.title)
      const movieRow = <MovieRow movie={movie} />
      
       movieRows.push(movieRow)
    })
    this.state = {rows: movieRows}
  }

  render() {
    return (
      <div className="App">
      <h1>Ract Movie App </h1>
      <input placeholder="Enter Your search here" />
      {this.state.rows}
       
      </div>
    );
  }
}

export default App;
