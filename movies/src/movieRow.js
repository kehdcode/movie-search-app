import React from 'react';

 class MovieRow extends React.Component {
     render(){
         return(
         <div key={this.props.movie.id} className="movie">
          <img width="100" src={this.props.movie.poster_src} alt="" /> 
         <p className="title">{this.props.movie.title}</p>
          <p>{this.props.movie.overview}</p>
           </div>
         );
     }

 }

 export  default MovieRow;