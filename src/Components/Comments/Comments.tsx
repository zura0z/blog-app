import useTheme from "../../hooks/useTheme";
import { IComment } from "../../services/comment.service";
import CommentInput from "./CommentInput/CommentInput";

import styles from "./Comments.module.scss";

const Comments = ({ comments }: { comments: IComment[] }) => {
  const { theme } = useTheme();
  return (
    <>
      <div className={[styles.wrapper, styles[theme]].join(" ")}>
        <p className={styles.header}>Comments</p>
        {comments.map((comment) => (
          <p key={comment.id} className={styles.comment}>
            {comment.body}
          </p>
        ))}
      </div>
      <CommentInput />
    </>
  );
};

export default Comments;
