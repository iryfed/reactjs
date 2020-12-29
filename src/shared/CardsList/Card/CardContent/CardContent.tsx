import React from 'react';
import styles from './cardcontent.scss';

interface ICardContentProps {
  children ?: React.ReactNode;
}

export function CardContent({children}: ICardContentProps) {
  return (
    <div className={styles.cardContent}>
      {children}
    </div>
  );
}
