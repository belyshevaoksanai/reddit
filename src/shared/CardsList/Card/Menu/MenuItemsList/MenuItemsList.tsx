import React from 'react';
import { EColors } from '../../../../../enums/colorsEnum';
import { EIcon } from '../../../../../enums/iconsEnum';
import { EScreens } from '../../../../../enums/screensEnum';
import { Icon } from '../../../../Icon';
import { CommentIcon, WarningIcon, ShareIconWithoutBack } from '../../../../icons';
import { Text } from '../../../../Text';
import { Visible } from '../../../../Visible';
import styles from './menuitemslist.css';

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <Visible screens={[EScreens.desktop, EScreens.tablet]}>
        <li className={styles.menuItem} onClick={() => console.log(postId)}>
          <Icon name={EIcon.comment} size={14}/>
          <Text size={12} color={EColors.grey99}>Комментарии</Text>
        </li>
        <div className={styles.divider} />
        <li className={styles.menuItem} onClick={() => console.log(postId)}>
          <Icon name={EIcon.shareIconWithoutBack} size={14}/>
          <Text size={12} color={EColors.grey99}>Поделиться</Text>
        </li>
        <div className={styles.divider} />
      </Visible>
      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <Icon name={EIcon.block} size={14}/>
        <Text size={12} color={EColors.grey99}>Скрыть</Text>
      </li>
      <div className={styles.divider} />
      <Visible screens={[EScreens.desktop, EScreens.tablet]}>
        <li className={styles.menuItem} onClick={() => console.log(postId)}>
          <Icon name={EIcon.saveIconWithoutBack} size={14}/>
          <Text size={12} color={EColors.grey99}>Сохранить</Text>
        </li>
        <div className={styles.divider} />
      </Visible>
      <li className={styles.menuItem}>
        <Icon name={EIcon.warning} size={14}/>
        <Text size={12} color={EColors.grey99}>Пожаловаться</Text>
      </li>
    </ul>
  );
}
