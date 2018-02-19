import React, { Component } from 'react';
import './search_bar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-wrapper">
       <input 
          type="search" 
          onChange={(e) => this.props.onSearchVideos(e.target.value)} 
          className="search-bar" 
          placeholder="Type for search..."
        />
      </div>
    )
  }
}

export default SearchBar;
        