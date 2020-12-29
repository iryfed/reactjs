import React from 'react';
import styles from './avatar.scss';

export function Avatar() {
  return (
    <div className={styles.avatar}>
      <img className={styles.avatarIcon} src="https://image.shutterstock.com/image-photo/isolated-shot-young-handsome-male-260nw-762790210.jpg" alt="Avatar"/>
      <a className={styles.avatarName}>Константин</a>
    </div>
  );
}
