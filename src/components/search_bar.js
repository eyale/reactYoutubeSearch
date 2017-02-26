import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term:''};
  }
  onInputChange(term) {
    this.setState({term: event.target.value});
    this.props.onSearch(term);
  }
  render() {
    return (
      <div className='search-bar'>
        <input
          autoFocus
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    )
  }
}

export default SearchBar;
