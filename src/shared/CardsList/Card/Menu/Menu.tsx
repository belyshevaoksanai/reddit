import React, { useEffect, useRef, useState } from 'react';
import { EColors } from '../../../../enums/colorsEnum';
import { EIcon } from '../../../../enums/iconsEnum';
import { EScreens } from '../../../../enums/screensEnum';
import { Dropdown } from '../../../Dropdown';
import { Icon } from '../../../Icon';
import { Text } from '../../../Text';
import { Visible } from '../../../Visible';
import styles from './menu.css';
import { MenuItemsList } from './MenuItemsList';

export function Menu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.target instanceof Node
        && !buttonRef?.current?.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  return (
    <div className={styles.menu}>
      <div className={styles.container}>
        <div ref={buttonRef} className={styles.dropdownButton} onClick={handleClick}>
          <button className={styles.menuButton}>
            <Icon size={20} name={EIcon.menu} />
          </button>
        </div>
      </div>
      <Dropdown isOpen={isDropdownOpen} onClose={handleClick} buttonRef={buttonRef}>
        <div className={styles.dropdown}>
          <MenuItemsList postId="1234" />
          <Visible screens={[EScreens.mobile, EScreens.tablet]}>
            <button className={styles.closeButton}>
              <Text mobileSize={12} size={14} color={EColors.grey66}>
                Закрыть
              </Text>
            </button>
          </Visible>
        </div>
      </Dropdown>
    </div>
  );
}
