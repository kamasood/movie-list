import React from 'react';
import Movie from './Movie.jsx';

const List = ({movies, handleWatchedClick}) => (
  <div className="movies-list">
    {movies.map((movie) => (
      <Movie
        movie={movie}
        key={`${movie.title}${Math.floor(Math.random()*(9999 - 1000)+1000)}`}
        handleWatchedClick={handleWatchedClick}/>
    ))}
  </div>
);

export default List;
