import { useStoreActions, useStoreState } from 'easy-peasy';
import { useFormik } from 'formik';
import React, { ChangeEvent } from 'react';
import styles from './commentForm.css';

interface ICommentForm {
  comment: string;
}

export function CommentFormContainer() {
  const comment = useStoreState((state) => (state as any).comment);
  const setComment = useStoreActions((actions) => (actions as any).setComment);

  const handleSubmit = (value: ICommentForm) => {
    console.log(value);
  }

  const formik = useFormik<ICommentForm>({
    initialValues: {
      comment,
    },
    onSubmit: handleSubmit,
  });

  const handleChangeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    formik.handleChange(event);
    setComment(event.target.value);
  }

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <textarea name='comment' value={formik.values.comment}  onChange={handleChangeComment} className={styles.input} />
      <button type='submit' className={styles.button}>Комментировать</button>
    </form>
  );
}
