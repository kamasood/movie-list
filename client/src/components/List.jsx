import React from 'react';
import Movie from './Movie.jsx';

// stateless functional component

const List = ({movies}) => (
  <div className='moviesList'>
    {movies.map((movie) => <Movie movie={movie} />)}
  </div>
);

export default List;

// const App = (props) => (
//   <div className='moviesListDynamic'>
//     <h1 className='pageTitle'>MovieList</h1>
//     <List movies={movies}/>
//   </div>
// );