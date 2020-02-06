import React from 'react';
// styles
import { SearchWrapper, Search } from './searchBarStyles';

function SearchBar({ handleSearch }) {
  return (
    <SearchWrapper>
      <Search
        type='search'
        placeholder='Type for search...'
        onChange={e => handleSearch(e.target.value)}
      />
    </SearchWrapper>
  );
}

export default React.memo(SearchBar);
