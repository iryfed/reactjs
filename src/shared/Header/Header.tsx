import React, { useEffect } from 'react';
import styles from './header.scss';

interface IHeaderProps {
  children ?: React.ReactNode;
}

export function Header({children}: IHeaderProps) {
  return (
    <header className={styles.header}>
      {children}
    </header>
  );
}
