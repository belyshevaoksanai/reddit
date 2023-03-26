import React from 'react';
import { getTimeAgo } from '../../../../utils/js/getTimeAgo';
import { MetaData } from '../../../MetaData';
import styles from './textcontent.css';
import { Title } from './Title';
import { UserLink } from './UserLink';

interface ITextContentProps {
  title: string;
  author: string;
  selftext: string;
  id: string;
  created: number;
  icon_img: string;
  ups: number;
}

export function TextContent({ title, author, icon_img, selftext, id, created, ups }: ITextContentProps) {
  return (
    <div className={styles.textContent}>
      <MetaData created={created} author={author} icon_img={icon_img}/>
      <Title title={title} selftext={selftext} id={id} ups={ups} created={created} author={author} icon_img={icon_img}/>
    </div>
  );
}
