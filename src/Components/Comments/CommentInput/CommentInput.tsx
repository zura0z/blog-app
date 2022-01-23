import { useContext, useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../Button/Button";

import useTheme from "../../../hooks/useTheme";
import { createComment } from "../../../redux/actions/comment.actions";
import { PostIdContext } from "../../Post/Post";

import styles from "./CommentInput.module.scss";

const CommentInput = () => {
  const [comment, setComment] = useState("");
  const postId = useContext(PostIdContext);
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const { loading, result } = useSelector(
    (state: any) => state.comments.create
  );

  useEffect(() => {
    if (result) setComment("");
  }, [result]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const addComment = () => {
    dispatch(createComment(postId!, comment));
  };

  return (
    <div className={[styles.wrapper, styles[theme]].join(" ")}>
      <textarea
        placeholder="Write a comment"
        value={comment}
        onChange={handleChange}
      />
      <Button onClick={addComment} disabled={loading}>
        Add Comment
      </Button>
    </div>
  );
};

export default CommentInput;
