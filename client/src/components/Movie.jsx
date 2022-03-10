import React from 'react';

const Movie = ({movie, handleWatchedClick}) => (
  <div className="movie-entry">{movie.title}
    <button
      className="watched-button"
      onClick={(e) => {handleWatchedClick(e, movie)}}>
      watched
    </button>
  </div>
)

export default Movie;