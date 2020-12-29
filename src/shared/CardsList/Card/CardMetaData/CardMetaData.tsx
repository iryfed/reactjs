import React from 'react';
import styles from './cardmetadata.scss';

export function CardMetaData() {
  return (
    <div className={styles.cardMetaData}>
        <img className={styles.metaAvatar} src="https://image.shutterstock.com/image-photo/isolated-shot-young-handsome-male-260nw-762790210.jpg" alt="Avatar"/>
        <a href="#user" className={styles.metaUsername}>Константин Кодов</a>
        <div className={styles.metaPubdate}>
        <span className={styles.metaPublic}>Опубликовано&nbsp;</span>8 часов назад</div>
    </div>
  );
}
