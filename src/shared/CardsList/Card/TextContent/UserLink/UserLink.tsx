import React from 'react';
import styles from './userlink.css';
import emptyAvatar from '../../../../img/empty_avatar.webp';

interface IUserLink {
  author: string;
  icon_img: string;
}

export function UserLink({ author, icon_img }: IUserLink) {
  return (
    <div className={styles.userLink}>
      <img
        className={styles.avatar}
        src={icon_img || emptyAvatar}
        alt="avatar"
      />
      <a href="#user-url" className={styles.username}>{author}</a>
    </div>
  );
}
