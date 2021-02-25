import React from 'react';
import styles from './cardmetadata.scss';

interface ICardMetaDataProps {
  metaAvatarSrc ?: string;
  metaUserName ?: string; 
  metaUserLink ?: string;
  metaPublicDate ?: string;
}

export function CardMetaData({
  metaAvatarSrc, 
  metaUserName, 
  metaUserLink, 
  metaPublicDate 
}: ICardMetaDataProps) {
  return (
    <div className={styles.cardMetaData}>
      {metaAvatarSrc
        ? <img className={styles.metaAvatar} src={metaAvatarSrc} alt="Avatar"/>
        : <div></div>
      }
      <a href={metaUserLink} className={styles.metaUsername}>{metaUserName}</a>
      <div className={styles.metaPubdate}>
        <span className={styles.metaPublic}>Опубликовано&nbsp;</span>{metaPublicDate}
      </div>
    </div>
  );
}
