import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import MovieRow from './movieRow.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}

    // const movies = [
    //   {id: 0, title: "Avengers", overview: "lorem ispum ispumdthev irumpuson tgckubhdiubbib", poster_src:"https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg" },
    //            {id: 1, title: "Infinity wars",  overview: "lorem ispum ispumdthev irumpuson tgckubhdiubbib", poster_src: "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"},
    //            {id:2, title: "SuperMan",  overview: "lorem ispum ispumdthev irumpuson tgckubhdiubbib", poster_src: "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"},
    //            {id: 3, title: "BatMan",  overview: "lorem ispum ispumdthev irumpuson tgckubhdiubbib", poster_src: "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"}
    // ]
    
    // var movieRows = []
    // movies.forEach((movie) => {
    //   console.log(movie.title)
    //   const movieRow = <MovieRow movie={movie} />
      
    //    movieRows.push(movieRow)
    // })
    // this.state = {rows: movieRows}
    this.performSearch()
  }
  performSearch() {
    console.log("performs Search")
    const urlstring = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=woman"
    $.ajax({
      url: urlstring,
      success: (searchResult) => {
        console.log("Sucessful")
       
        const results = searchResult.results
        var movieRows = []
        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          console.log(movie)
         const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
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
