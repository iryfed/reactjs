import React from 'react';
import styles from './dropdown.scss';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen ?: boolean;
  isCloseBtn ?: boolean;
  onOpen ?: () => void;
  onClose ?: () => void;
}

const NOOP = () => {};

export function Dropdown({ button, children, isOpen, isCloseBtn, onOpen = NOOP, onClose = NOOP }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>
        {button}
      </div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list}>
            {isCloseBtn && (
              <button className={styles.closeBtn} 
                      onClick={() => setIsDropdownOpen(false)}>
                <span></span>
                <span></span>
              </button>
            )}
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
