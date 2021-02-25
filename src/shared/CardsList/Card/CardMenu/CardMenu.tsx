import React, { useState, useRef } from 'react';
import { DropdownPortal } from '../../../DropdownPortal';
import { CardMenuList } from '../CardMenuList';
import styles from './cardmenu.scss';

export function CardMenu() {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  const topPosition = ref.current?.getBoundingClientRect().top ? (ref.current?.getBoundingClientRect().top + window.scrollY) : 0;
  const rightPosition = ref.current?.getBoundingClientRect().right ? (document.body.clientWidth - ref.current?.getBoundingClientRect().right) : 0;

  return (
    <button className={styles.cardMenu} onClick={() => { setIsDropdownOpened(true); }} ref={ref}>
        <span></span>
        <span></span>
        <span></span>

        {isDropdownOpened && (
          <DropdownPortal onClose={() => { setIsDropdownOpened(false); }} topPosition={topPosition} rightPosition={rightPosition}>
            <CardMenuList postId="123" />
          </DropdownPortal>
        )}
    </button>
  );
}
