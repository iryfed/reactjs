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
import { ControlCommentsTablet } from './ControlCommentsTablet';
import { Dropdown } from '../../Dropdown';
import { Comments } from './Comments';

interface ICardProps {
  post: any;
}

export function Card({ post }: ICardProps) {
  return (
    <li className={styles.item}>
      <div className={styles.card}>
        <CardContent>
          <Dropdown button={<ControlCommentsTablet />} isCloseBtn={true}>
            <Comments />
          </Dropdown>
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
        <CardMenu />
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
