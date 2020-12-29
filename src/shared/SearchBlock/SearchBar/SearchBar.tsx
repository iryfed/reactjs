import React from 'react';
import styles from './searchbar.scss';

export function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input type="text" name="searchBar" placeholder="search" />
    </div>
  );
}
