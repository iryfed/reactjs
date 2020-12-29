import React from 'react';
import styles from './cardcontrols.scss';

interface IControlsProps {
  children ?: React.ReactNode;
}

export function CardControls({children}: IControlsProps) {
  return (
    <div className={styles.cardControls}>
        {children}
    </div>
  );
}
