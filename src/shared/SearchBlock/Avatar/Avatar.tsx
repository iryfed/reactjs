import React from 'react';
import styles from './avatar.scss';
import { EIcons, Icon } from '../../Icon/Icon';

interface IAvatarProps {
  avatarSrc ?: string
  username ?: string
  loading?: boolean
}

export function Avatar({ avatarSrc, username, loading }: IAvatarProps) {
  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=oBtLDkWhhgV-MQ&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
      className={styles.avatar}
    >
      {loading
        ? <span>загрузка...</span>
        : <span></span>
      }
      {avatarSrc
        ? <img src={avatarSrc} alt="Avatar" className={styles.avatarIcon} />
        : <Icon name={EIcons.anonim} size={50} mobileSize={30} desktopSize={50} />
      }
      {username 
        ? <span className={styles.avatarName}>{username}</span>
        : <span className={styles.avatarAnonim}>Аноним</span>
      }
    </a>
  );
}
