import React from 'react';
import styles from './controlarrows.scss';

export function ControlArrows() {
  return (
    <div className={styles.controlArrows}>
      <button>
        <svg className={styles.arrowUp} viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
        </svg>
      </button>
      <span className={styles.controlArrowCount}>286</span>
        <button>
        <svg className={styles.arrowDown} viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
        </svg>
        </button>
    </div>
  );
}
