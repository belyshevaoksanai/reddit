import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { tokenSelector } from '../../store/token';
import { Card } from './Card/Card';
import styles from './cardslist.css';

interface IPostsResponse {
  data: {
    children: {
      kind: 't3';
      data: IPostData;
    }[]
  }
}

export interface IPost {
  title: string;
  author: string;
  bannerImg: string;
  selftext: string;
  id: string;
  created: number;
  icon_img: string;
  ups: number;
}

interface IPostData {
  title: string;
  author: string;
  url: string;
  sr_detail: {
    banner_img: string;
    icon_img: string;
  }
  selftext: string;
  id: string;
  created: number;
  ups: number;
}

export function CardsList() {
  const token = useSelector(tokenSelector);
  const bottomOfList = useRef<HTMLDivElement>(null);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [after, setAfter] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadCount, setLoadCount] = useState(0);
  const [errorLoading, setErrorLoading] = useState('');

  async function load() {
    setLoading(true);
    setErrorLoading('');
    try {
      const response = await axios.get('https://oauth.reddit.com/best?sr_detail=true', {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          limit: 10,
          after: after,
        }
      })
      const posts = response.data.data.children.map(({ data }: { data: IPostData }) => ({
        bannerImg: data.sr_detail.banner_img,
        title: data.title,
        author: data.author,
        selftext: data.selftext,
        icon_img: data.sr_detail.icon_img,
        id: data.id,
        created: data.created,
        ups: data.ups,
      }));
      setAfter(response.data.data.after);
      setPosts((prevChildren) => prevChildren.concat(posts));
      setLoadCount((prevCount) => prevCount === 2 ? 1 : prevCount + 1);
    } catch (e) {
      setErrorLoading(String(e));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && token && loadCount !== 2) {
        load();
      }
    }, {
      rootMargin: '10px',
    });

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    }
  }, [bottomOfList.current, after, token, loadCount]);

  return (
    <ul className={styles.cardsList}>
      {posts.length === 0 && !loading && !errorLoading && (
        <div style={{ textAlign: 'center' }}>Нет ни одного поста...</div>
      )}
      {posts.map((card, i) => <Card data={card} key={card.id + i} />)}
      {(loadCount && loadCount === 2 && !loading) ? (
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={load}>Загрузить еще</button>
        </div>
      ) : null}
      <div ref={bottomOfList} />
      {loading && <div style={{ textAlign: 'center' }}>Загрузка...</div>}
      {errorLoading && <div role='alert' style={{ textAlign: 'center' }}>{errorLoading}</div>}
    </ul>
  );
}
