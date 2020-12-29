import React from 'react';
import styles from './card.scss';
import { CardContent } from './CardContent/CardContent.tsx';
import { CardPreview } from './CardPreview/CardPreview.tsx';
import { CardMenu } from './CardMenu/CardMenu.tsx';
import { CardControls } from './CardControls/CardControls.tsx';
import { CardMetaData } from './CardMetaData/CardMetaData.tsx';
import { CardTitle } from './CardTitle/CardTitle.tsx';
import { ControlArrows } from './ControlArrows/ControlArrows.tsx';
import { ControlComments } from './ControlComments/ControlComments.tsx';
import { ControlActions } from './ControlActions/ControlActions.tsx';
import { Dropdown } from '.././../Dropdown/Dropdown.tsx';
import { CardMenuList } from './CardMenuList/CardMenuList.tsx';

export function Card() {
  return (
    <li className={styles.item}>
      <div className={styles.card}>
        <CardContent>
          <CardMetaData />
          <CardTitle />
        </CardContent>
        <CardPreview />
        <Dropdown button={<CardMenu />}>
          <CardMenuList />
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
