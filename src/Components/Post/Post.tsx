import { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Comments from "../Comments/Comments";
import Button, { ButtonType } from "../Button/Button";
import Icon from "../Icon/Icon";

import useHistory from "../../hooks/useHistory";
import useTheme from "../../hooks/useTheme";
import { deletePost, getPosts } from "../../redux/actions/post.actions";
import { IPost } from "../../services/post.service";

import trash from "../../assets/icons/trash.svg";
import edit from "../../assets/icons/edit.svg";
import styles from "./Post.module.scss";

export const PostIdContext = createContext<number | null>(null);

const Post = ({ post }: { post: IPost }) => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const { result: deleted } = useSelector((state: any) => state.posts.delete);
  const {
    navigate,
    params: { id: detailedView },
  } = useHistory();

  useEffect(() => {
    if (deleted) {
      dispatch(getPosts());
      navigate("/");
    }
  }, [deleted]);

  const removePost = () => {
    dispatch(deletePost(post.id!));
  };

  const editPost = () => {
    navigate(`/post/edit/${post.id}`);
  };

  const openPost = () => {
    navigate(`/post/${post.id}`);
  };

  const classes = [
    styles.wrapper,
    !detailedView && styles.hover,
    styles[theme],
  ];

  return (
    <>
      <div className={classes.join(" ")}>
        <h2 onClick={openPost} className={styles.title}>
          {post.title}
        </h2>
        <p className={styles.body}>{post.body}</p>
        <div className={styles.actionWrapper}>
          <Button onClick={editPost} type={ButtonType.secondary}>
            <Icon icon={edit} />
          </Button>
          <Button onClick={removePost} type={ButtonType.danger}>
            <Icon icon={trash} />
          </Button>
        </div>
      </div>
      {detailedView && (
        <PostIdContext.Provider value={post.id!}>
          <Comments comments={post.comments!} />
        </PostIdContext.Provider>
      )}
    </>
  );
};

export default Post;
