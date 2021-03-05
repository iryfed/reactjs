import React, { ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../../redux/reducers/commentReducer';
import { RootState } from '../../../redux/reducers/rootReducer';
import styles from './commentform.scss';



interface ICommentFormProps {
  username ?: string;
}

export function CommentForm({ username }: ICommentFormProps) {
  const value = useSelector<RootState, string>(state => state.comment.commentText);
  const dispatch = useDispatch();

  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
      ref.current.selectionStart = ref.current.value.length;
      ref.current.selectionEnd = ref.current.value.length;
    }
  }, []);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea className={styles.textarea} 
                value={value}
                onChange={handleChange} 
                ref={ref}/>
      <button type="submit" className={styles.submitBtn}>Комментировать</button>
    </form>
  );
}
