import React, { useContext, useEffect, useState } from 'react';
import styles from './searchblock.scss';
import { Avatar } from './Avatar/Avatar';
import { SearchBar } from './SearchBar/SearchBar';
import { Message } from './Message/Message';
import { useUserData } from '../../utils/hooks/useUserData';


export function SearchBlock() {
  const { data, loading } = useUserData();
    
  return (
    <div className={styles.searchBlock}>
      <Avatar avatarSrc={data.iconImg} username={data.name} loading={loading} />
      <SearchBar />
      <Message />
    </div>
  );
}
