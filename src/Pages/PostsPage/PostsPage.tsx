import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../Components/Loader/Loader";
import Post from "../../Components/Post/Post";
import useHistory from "../../hooks/useHistory";

import { getPosts } from "../../redux/actions/post.actions";
import { IPost } from "../../services/post.service";

import styles from "./PostsPage.module.scss";

export interface IState<T> {
  loading: boolean;
  result: T;
}

const PostsPage = () => {
  const dispatch = useDispatch();
  const { search } = useHistory();
  const { loading, result: posts }: IState<IPost[]> = useSelector(
    (state: any) => state.posts.allPosts
  );

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const filter = (post: IPost) => {
    const matches = (string: string) => {
      return string.toLowerCase().includes(search!.toLowerCase());
    };

    if (search) {
      return matches(post.title) || matches(post.body);
    }

    return true;
  };

  return (
    <div className={styles.wrapper}>
      <Loader loading={loading} />
      {posts?.filter(filter)?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsPage;
