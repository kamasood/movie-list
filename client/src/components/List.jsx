import React from 'react';
import Movie from './Movie.jsx';

const List = ({movies, handleWatchedClick}) => (
  <div className='moviesList'>
    {movies.map((movie) => (
      <Movie
        movie={movie}
        key={movie.title}
        handleWatchedClick={handleWatchedClick}/>
    ))}
  </div>
);

export default List;
