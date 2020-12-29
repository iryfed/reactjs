import React from 'react';
import styles from './searchblock.scss';
import { Avatar } from './Avatar/Avatar.tsx';
import { SearchBar } from './SearchBar/SearchBar.tsx';
import { Message } from './Message/Message.tsx';

export function SearchBlock() {
  return (
    <div className={styles.searchBlock}>
      <Avatar />
      <SearchBar />
      <Message />
    </div>
  );
}
