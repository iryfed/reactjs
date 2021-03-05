import React, { useContext } from 'react';
import styles from './cardslist.scss';
import { Card } from './Card/Card';
import { generateRandomString } from './../../utils/react/generateRandomIndex';
import { usePostsData } from '../../utils/hooks/usePostsData';


export function CardsList() {
  const [data] = usePostsData();
  
  return (
    <div>
      {data.postsList
      ? <ul>{data.postsList.map((post) => <Card key={generateRandomString()} post={post} />)}</ul>
      : <p className={styles.warning}>Авторизуйтесь для просмотра лучших постов</p>
      }
    </div>
  );
}
