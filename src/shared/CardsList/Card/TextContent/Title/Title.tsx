import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './title.css';

interface ITitleProps {
  title: string;
  selftext: string;
  id: string;
  ups: number;
  created: number;
  icon_img: string;
  author: string;
}

export function Title({title, id}: ITitleProps) {
  return (
    <h2 className={styles.title}>
      <Link to={`/posts/${id}`} className={styles.postLink}>
        {title}
      </Link>
    </h2>
  );
}
