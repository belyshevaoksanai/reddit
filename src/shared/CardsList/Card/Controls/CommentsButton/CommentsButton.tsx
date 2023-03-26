import React from 'react';
import { EIcon } from '../../../../../enums/iconsEnum';
import { Icon } from '../../../../Icon';
import { CommentIcon } from '../../../../icons';
import styles from './commentsbutton.css';

export function CommentsButton() {
  return (
    <button className={styles.commentsButton}>
      <Icon name={EIcon.comment} size={14}/>
      <span className={styles.commentsNumber}>13</span>
    </button>
  );
}
