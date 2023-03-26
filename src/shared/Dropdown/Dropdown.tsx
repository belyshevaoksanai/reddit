import React, { ReactNode, RefObject, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdown.css';

interface IDropdownProps {
  children: ReactNode;
  buttonRef?: React.RefObject<HTMLDivElement>;
  isOpen: boolean;
  onClose: () => void;
}

const noop = () => { };

export function Dropdown({ children, isOpen, buttonRef, onClose = noop }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
  const node = document.getElementById('dropdown_root');

  const position = buttonRef?.current?.getBoundingClientRect?.();

  useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);

  if (!isDropdownOpen || !node) {
    return null;
  }

  return ReactDOM.createPortal(
    (
        <div className={styles.listContainer} style={{ left: position?.right, top: position?.bottom }}>
          <div className={styles.list} onClick={onClose}>
            {children}
          </div>
        </div>
    ),
    node,
  );
}
