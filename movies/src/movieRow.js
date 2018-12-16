import React from 'react';

 class MovieRow extends React.Component {
     render(){
         return(
         <div key={this.props.movie.id} className="movie">
          <img width="150" src={this.props.movie.poster_src} alt="" /> 
         <p className="title"><span className="description">Title:</span> {this.props.movie.title}</p>
          <p><span className="description">Movie overview:</span> {this.props.movie.overview} </p>
          <p><span className="description">YEAR:</span> {this.props.movie.release_date}</p>
          <p><span className="description">POPULARITY:</span> {this.props.movie.popularity}</p>
           </div>
         );
     }

 }

 export  default MovieRow;