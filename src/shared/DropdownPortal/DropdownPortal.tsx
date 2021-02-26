import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdownportal.scss';

interface IDropdownPortalProps {
  children: React.ReactNode;
  onClose ?: () => void;
  topPosition ?: number;
  rightPosition ?: number;
}

const NOOP = () => {};

export function DropdownPortal({ children, onClose = NOOP, topPosition, rightPosition }: IDropdownPortalProps) {
  const ref = useRef<HTMLDivElement>(null);
  const position = {
    top: topPosition + 'px',
    right: rightPosition + 'px',
  }

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        onClose();
        console.log('clicked out: ' + 'top:' + topPosition + ' right: ' + rightPosition);
      }
    }
    
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    }

  }, []);

  const node = document.querySelector('#dropdown_root');
  if (!node) return null;

  return ReactDOM.createPortal((
    <div className={styles.container} ref={ref} style={position}>
      <div className={styles.listContainer}>
        {children}
      </div>
    </div>
  ), node);
}
