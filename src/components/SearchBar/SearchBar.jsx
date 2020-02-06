import React from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ handleSearch }) {
  return (
    <div className={styles.search_wrapper}>
      <input
        type='search'
        onChange={e => handleSearch(e.target.value)}
        className={styles.search_bar}
        placeholder='Type for search...'
      />
    </div>
  );
}

export default React.memo(SearchBar);
