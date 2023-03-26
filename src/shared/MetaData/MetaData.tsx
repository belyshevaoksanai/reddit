import React from 'react';
import { getTimeAgo } from '../../utils/js/getTimeAgo';
import { UserLink } from '../CardsList/Card/TextContent/UserLink';
import styles from './metadata.css';

interface IMetadataProps {
  icon_img: string;
  author: string;
  created: number;
}

export function MetaData({author, icon_img, created}: IMetadataProps) {
  return (
    <div className={styles.metaData}>
      <UserLink author={author} icon_img={icon_img} />
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}>опубликовано </span>
        {getTimeAgo(created)}
      </span>
    </div>
  );
}
