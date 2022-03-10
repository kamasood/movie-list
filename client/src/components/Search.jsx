import React from 'react';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange({value}) {
    this.setState({value});
  }

  render() {
    return (
        <div>
        <button onClick={(e) => {this.props.displayWatchListMovies()}}>Watch List</button>
        <button onClick={(e) => {this.props.displayWatchedMovies()}}>Watched</button>
        <form
          className='searchForm'
          onSubmit={(e) => {this.props.handleSearchSubmit(e, this.state.value)}}>
          <input
            type="text"
            placeholder="Search..."
            value={this.state.value}
            onChange={(e) => this.handleChange(e.target)}>
          </input>
          <input type="submit" value="Go!"></input>
        </form>
      </div>
    );
  }
}

export default Search;