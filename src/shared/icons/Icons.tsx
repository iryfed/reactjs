import React from 'react';
import styles from './icons.scss';

interface IIcons {
  As ?: 'svg';
}

export function Icons({ As = 'svg' }: IIcons) {
  return (
    <As>
    </As>
  );
}
