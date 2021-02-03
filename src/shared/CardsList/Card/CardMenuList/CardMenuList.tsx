import React from 'react';
import styles from './cardmenulist.scss';
import { ComplainIcon } from '../../../icons/ComplainIcon';
import { Icon, EIcons } from '../../../Icon/Icon';


interface ICardMenuList {
  postId: string;
}

export function CardMenuList({ postId }: ICardMenuList) {
  return (
    <ul className={styles.cardMenuList}>
      <li className={styles.cardMenuListItem} onClick={() => console.log(postId)}>
        <Icon name={EIcons.hide} size={16} mobileSize={12} desktopSize={16} />
        Скрыть</li>
      <li className={styles.cardMenuListItem}>
        <ComplainIcon />
        Пожаловаться</li>
      <li className={styles.cardMenuListClose}>Закрыть</li>
    </ul>
  );
}
