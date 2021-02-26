import React, { useContext, useEffect, useState } from 'react';
import styles from './searchblock.scss';
import { Avatar } from './Avatar/Avatar';
import { SearchBar } from './SearchBar/SearchBar';
import { Message } from './Message/Message';
import { userContext } from '../context/userContext';


export function SearchBlock() {
  const { iconImg, name } = useContext(userContext)
  
  return (
    <div className={styles.searchBlock}>
      <Avatar avatarSrc={iconImg} username={name} />
      <SearchBar />
      <Message />
    </div>
  );
}
