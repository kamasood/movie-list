import React from 'react';
import List from './List.jsx';
import Search from './Search.jsx';
import Add from './Add.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allMovies: [],
      displayedMovies: [],
      listSelected: 'watchlist'
    };
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
      listSelected: 'watchlist'
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
    this.state.allMovies.push({ title, watched: false});
    if (this.state.listSelected  === 'watchlist') {
      this.displayWatchListMovies();
    } else if (this.state.listSelected === 'watched') {
      this.displayWatchedMovies();
    }
  }

  handleSearchSubmit(event, query) {
    event.preventDefault();
    const newMovieList = this.state.allMovies.filter(({title}) =>
      title.toLowerCase().includes(query.toLowerCase()));
    this.setState({
      displayedMovies: newMovieList
    });
  }

  render() {
    return (
      <div className="page-dynamic-view">
        <h1 className="page-title">MovieList</h1>
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

export default App;