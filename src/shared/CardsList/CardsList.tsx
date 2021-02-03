import React, { useContext } from 'react';
import styles from './cardslist.scss';
import { postsContext } from '../context/postsContext';
import { Card } from './Card/Card';
import { generateRandomString } from './../../utils/react/generateRandomIndex';


export function CardsList() {
  const { postsList } = useContext(postsContext);
  
  return (
    <div>
      {postsList
      ? <ul>{postsList.map((post) => <Card post={post} postIndex={generateRandomString()} />)}</ul>
      : <p className={styles.warning}>Авторизуйтесь для просмотра лучших постов</p>
      }
    </div>
  );
}
