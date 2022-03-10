import React from 'react';

class Add extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  // updates state as form input text changes
  handleChange({value}) {
    this.setState({value});
  }

  // renders form text and submit button, handler for onSubmit
  render() {
    return(
      <form className='addForm' onSubmit={(e) => {this.props.handleAddSubmit(e, this.state.value)}}>
        <input
          type="text"
          placeholder="Add movie title here"
          value={this.state.value}
          onChange={(e) => this.handleChange(e.target)}></input>
        <input type="submit" value="Add"></input>
      </form>
    );
  }

}

export default Add;