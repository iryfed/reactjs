import React from 'react';
import styles from './card.scss';
import { CardContent } from './CardContent/CardContent';
import { CardPreview } from './CardPreview/CardPreview';
import { CardMenu } from './CardMenu/CardMenu';
import { CardControls } from './CardControls/CardControls';
import { CardMetaData } from './CardMetaData/CardMetaData';
import { CardTitle } from './CardTitle/CardTitle';
import { ControlArrows } from './ControlArrows/ControlArrows';
import { ControlComments } from './ControlComments/ControlComments';
import { ControlActions } from './ControlActions/ControlActions';
import { Dropdown } from '.././../Dropdown/Dropdown';
import { CardMenuList } from './CardMenuList/CardMenuList';

interface ICardProps {
  post: any;
  postIndex: string;
}

export function Card({ post, postIndex }: ICardProps) {
  return (
    <li className={styles.item} key={postIndex}>
      <div className={styles.card}>
        <CardContent>
          <CardMetaData 
            metaAvatarSrc={undefined}
            metaUserName={post.data.author_fullname}
            metaUserLink={''}
            metaPublicDate={post.data.created}
          />
          <CardTitle title={post.data.title} titleUrl={post.data.url_overridden_by_dest} />
        </CardContent>
        {post.data.thumbnail
          ? <CardPreview cardPreviewSrc={post.data.thumbnail} />
          : <div></div>
        }
        <Dropdown button={<CardMenu />}>
          <CardMenuList postId="123" />
        </Dropdown>
        <CardControls>
          <ControlArrows />
          <ControlComments />
          <ControlActions />
        </CardControls>
      </div>
      <a className={styles.postLink} href="#post"></a>
    </li>
  );
}
