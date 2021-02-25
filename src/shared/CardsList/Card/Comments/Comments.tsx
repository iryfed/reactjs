import React, { useState } from 'react';
import styles from './comments.scss';
import { CommentForm } from './../CommentForm';

export function Comments() {
  const [ isCommentFormOpened, setIsCommentFormOpened ] = useState(false);
  const avatar = "https://image.shutterstock.com/image-photo/isolated-shot-young-handsome-male-260nw-762790210.jpg";
  const username = "Михаил Рогов";

  return (
    <div className={styles.container}>
      <div className={styles.commentHead}>
        <img className={styles.commentAvatar}src={avatar} />
        <span className={styles.commentUsername}>
          {username}
        </span>
      </div>
      <div className={styles.commentText}>
      Банальные, но неопровержимые выводы, а также многие известные личности лишь добавляют фракционных разногласий и рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Таким образом, постоянное информационно-пропагандистское обеспечение нашей деятельности является качественно новой ступенью прогресса профессионального сообщества.
      </div>
      <button className={styles.commentBtn}
              onClick={() => { setIsCommentFormOpened(true); }}>
        Ответить
      </button>
      {isCommentFormOpened && (
        <CommentForm username={username}/>
      )}
    </div>
  );
}
