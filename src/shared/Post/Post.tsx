import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useCommentData } from '../../hooks/useCommentData';
import { getTimeAgo } from '../../utils/js/getTimeAgo';
import { KarmaCounter } from '../CardsList/Card/Controls/KarmaCounter';
import { UserLink } from '../CardsList/Card/TextContent/UserLink';
import { CommentFormContainer } from './CommentFormContainer';
import { CommentList } from '../CommentList';
import { MetaData } from '../MetaData';
import styles from './post.css';
import { useHistory } from 'react-router-dom';

export function Post() {
  const history = useHistory();
  const id = history.location.pathname.split('/')[2];
  const [comments, card] = useCommentData(id);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        history.push('/posts');
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  const node = document.getElementById('modal_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    (<div className={styles.modal} ref={ref}>
      {card ? (
        <>
          <div className={styles.titleContainer}>
            <KarmaCounter ups={card.ups} />
            <div>
              <h2 className={styles.title}>{card?.title}</h2>
              <MetaData author={card.author} created={card.created} icon_img={card.icon_img} />
            </div>
          </div><div className={styles.content}>
            <p>{card.selftext}</p>
          </div>
          <CommentFormContainer />
          <CommentList comments={comments} />
        </>
      ) : (
        <div style={{ height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
          Загрузка...
        </div>
      )}
    </div>),
    node,
  );
}
