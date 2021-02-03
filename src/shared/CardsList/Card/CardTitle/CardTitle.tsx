import React from 'react';
import styles from './cardtitle.scss';

interface ICardTitle {
  title: {};
  titleUrl: string;
}

export function CardTitle({ title, titleUrl }: ICardTitle) {
  return (
    <h2 className={styles.cardTitle}>
      <a href={titleUrl}>{title}</a>
    </h2>
  );
}
