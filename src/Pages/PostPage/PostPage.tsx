import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../Components/Loader/Loader";
import Post from "../../Components/Post/Post";

import useHistory from "../../hooks/useHistory";
import { getPost } from "../../redux/actions/post.actions";
import { IPost } from "../../services/post.service";
import { IState } from "../PostsPage/PostsPage";

import styles from "./PostPage.module.scss";

const PostPage = () => {
  const dispatch = useDispatch();
  const {
    params: { id },
  } = useHistory();
  const { loading, result: post }: IState<IPost> = useSelector(
    (state: any) => state.posts.post
  );

  useEffect(() => {
    dispatch(getPost(id!));
  }, []);

  return (
    <div className={styles.wrapper}>
      <Loader loading={loading} />
      {post && <Post post={post} />}
    </div>
  );
};

export default PostPage;
