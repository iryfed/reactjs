import React from 'react';
import styles from './avatar.scss';
import { EIcons, Icon } from '../../Icon/Icon';

interface IAvatarProps {
  avatarSrc ?: string
  username ?: string
}

export function Avatar({ avatarSrc, username}: IAvatarProps) {
  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=oBtLDkWhhgV-MQ&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
      className={styles.avatar}
    >
      {avatarSrc
        ? <img src={avatarSrc} alt="user avatar" className={styles.avatarIcon} />
        : <Icon name={EIcons.anonim} size={50} mobileSize={30} desktopSize={50} />
      }
      {username 
        ? <a className={styles.avatarName}></a>
        : <span className={styles.avatarAnonim}>Аноним</span>
      }
    </a>
  );
}
