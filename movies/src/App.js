import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    const movies = [
      {id: 0, title: "Avengers", overview: "lorem ispum ispumdthev irumpuson tgckubhdiubbib", poster_src:"https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg" },
               {id: 1, title: "Infinity wars",  overview: "lorem ispum ispumdthev irumpuson tgckubhdiubbib", poster_src: "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"},
               {id:2, title: "SuperMan",  overview: "lorem ispum ispumdthev irumpuson tgckubhdiubbib", poster_src: "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"},
               {id: 3, title: "BatMan",  overview: "lorem ispum ispumdthev irumpuson tgckubhdiubbib", poster_src: "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"}
    ]
    this.state = {
      rows: [<p key="1">This is a row </p>,
        <p  key="2">This is a row </p> ,
        <p  key="3">This is a row </p> 

      ]
    }
    let movieRows = []
    movies.forEach((movie) => {
      console.log(movie.title)
      movieRows.push(<p key={movie.id}>{movie.title}</p>)
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
