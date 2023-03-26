import React from 'react';
import styles from './preview.css';
import emptyImg from '../../../img/empty.webp'

interface IPriviewProps {
  imgLink: string;
}

export function Preview({imgLink}: IPriviewProps) {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src={imgLink || emptyImg}
        onError={(e)=>{e.currentTarget.onerror = null; e.currentTarget.src=emptyImg}}
      />
    </div>
  );
}
