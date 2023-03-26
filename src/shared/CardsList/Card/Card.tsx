import React from 'react';
import { IPost } from '../CardsList';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

interface ICardProps {
  data: IPost;
}

export function Card({data}: ICardProps) {
  return (
    <li className={styles.card}>
      <TextContent title={data.title} author={data.author} selftext={data.selftext} id={data.id} created={data.created} icon_img={data.icon_img} ups={data.ups}/>
      <Preview imgLink={data.bannerImg}/>
      <Menu/>
      <Controls ups={data.ups}/>
    </li>
  );
}
