import React from 'react';
import styles from './cardpreview.scss';

interface ICardPreviewProps {
  cardPreviewSrc ?: string;
}

export function CardPreview({ cardPreviewSrc }: ICardPreviewProps) {
  return (
    <div className={styles.cardPreview}>
      <img src={cardPreviewSrc} alt="" />
    </div>
  );
}
