import React from 'react';

const Movie = ({movie, handleWatchedClick}) => (

  // renders movie entry, handler for clicking watched
  <div className='movieEntry'>{movie.title}
    <button
      onClick={(e) => {handleWatchedClick(e, movie)}} // should be reference to movie object in storage array
    >
      watched
    </button>
  </div>
)

export default Movie;