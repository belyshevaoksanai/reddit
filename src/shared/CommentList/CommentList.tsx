import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { EIcon } from '../../enums/iconsEnum';
import { getTimeAgo } from '../../utils/js/getTimeAgo';
import { KarmaCounter } from '../CardsList/Card/Controls/KarmaCounter';
import { UserLink } from '../CardsList/Card/TextContent/UserLink';
import { Icon } from '../Icon';
import { Text } from '../Text';
import styles from './commentlist.css';
import { EColors } from '../../enums/colorsEnum';
import classNames from 'classnames';
import { useFormik } from 'formik';

interface ICommentListProps {
  comments: any[];
  depth?: number;
}

interface ICommentProps {
  comment: any;
}

interface ICommentForm {
  comment: string;
}

interface ICommentFormProps {
  value?: string;
}

function AnswerForm({ value = '' }: ICommentFormProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
      ref.current.setSelectionRange(value.length, value.length);
    }
  }, [value]);

  const formik = useFormik<ICommentForm>({
    initialValues: {
      comment: value,
    },
    onSubmit: (value) => {
      console.log(value);
      formik.resetForm();
    },
  });

  const handleChangeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    formik.handleChange(event);
  }

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <textarea ref={ref} name='comment' value={formik.values.comment} onChange={handleChangeComment} className={styles.input} />
      <button type='submit' className={styles.button}>Отправить</button>
    </form>
  );
}


function Comment({ comment }: ICommentProps) {
  const [showComment, setShowComment] = useState(false);

  return (
    <div style={{ minHeight: 80 }}>
      <div className={styles.metaData}>
        <UserLink author={comment.data.author} icon_img={comment.data.icon_img} />
        <span className={styles.createdAt}>
          {getTimeAgo(comment.data.created)}
        </span>
      </div>
      <p>{comment.data.body}</p>
      <div className={styles.postButton} onClick={() => setShowComment((state) => !state)}>
        <Icon name={EIcon.comment} size={14} />
        <Text size={14} color={EColors.grey99}>Ответить</Text>
      </div>
      {showComment && <AnswerForm
        value={comment.data.author + ', '}
      />}
    </div>
  )
}

export function CommentList({ comments, depth = 0 }: ICommentListProps) {
  return (
    <>
      {comments.map((comment: any) => (
        <div key={comment.data.id}>
          <div style={{ position: 'absolute', background: 'white' }}>
            <KarmaCounter ups={comment.data.ups} />
          </div>
          <div className={classNames({ [styles.commentBlock]: true, [styles.outerCommenBlock]: depth === 0 })}>
            <Comment comment={comment} />
            {
              comment.data.replies?.data?.children && comment.data.replies.data.children.length > 0 && (
                <CommentList depth={depth + 1} comments={comment.data.replies.data.children.filter((item: any) => item.kind !== 'more')} />
              )
            }
          </div>
        </div>
      ))}
    </>
  );
}
