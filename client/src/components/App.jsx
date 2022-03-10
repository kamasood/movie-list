import React from 'react';
import List from './List.jsx';
import Search from './Search.jsx';
import Add from './Add.jsx';

//stateless functional component

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allMovies: [],
      displayedMovies: [],
      listSelected: 'all'
    };

    // this.displayWatchedMovies.bind(this);
    // this.displayWatchListMovies.bind(this);
    // this.handleAddSubmit.bind(this);
    // this.handleSearchSubmit.bind(this);
  }

  displayWatchedMovies() {
    let watchedMovies = this.state.allMovies.filter(({watched}) => watched);
    this.setState({
      displayedMovies: watchedMovies,
      listSelected: 'watched'
    })
  }

  displayWatchListMovies() {
    let watchListMovies = this.state.allMovies.filter(({watched}) => !watched);
    this.setState({
      displayedMovies: watchListMovies,
      listSelected: 'watch list'
    })
  }

  handleWatchedClick(event, movie) {
    if (movie.watched === true) {
      movie.watched = false;
      this.displayWatchedMovies();
    } else {
      movie.watched = true;
      this.displayWatchListMovies();
    }
  }

  handleAddSubmit(event, title) {
    event.preventDefault();
    let movies = this.state.allMovies.slice();
    movies.push({title, watched: false});
    this.setState({
      allMovies: movies,
      displayedMovies: movies
    })
  }

  handleSearchSubmit(event, query) {
    event.preventDefault();
    const newMovieList = this.state.allMovies.filter(({title}) =>
      title.toLowerCase().includes(query.toLowerCase()));
    console.log(newMovieList)
    this.setState({
      displayedMovies: newMovieList
    });
  }

  render() {
    return (
      <div className='pageDynamicView'>
        <h1 className='page-title'>MovieList</h1>
        <Add handleAddSubmit={this.handleAddSubmit.bind(this)}/>
        <Search
          displayWatchListMovies={this.displayWatchListMovies.bind(this)}
          displayWatchedMovies={this.displayWatchedMovies.bind(this)}
          handleSearchSubmit={this.handleSearchSubmit.bind(this)}/>
        <List
          movies={this.state.displayedMovies}
          handleWatchedClick={this.handleWatchedClick.bind(this)}/>
      </div>
    );
  }
}
// hardcoded movies data
var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

export default App;