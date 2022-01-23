import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button, { ButtonType } from "../../Components/Button/Button";
import Loader from "../../Components/Loader/Loader";

import { IState } from "../PostsPage/PostsPage";
import { IPost } from "../../services/post.service";
import useHistory, { Action } from "../../hooks/useHistory";
import {
  createPost,
  getPost,
  updatePost,
} from "../../redux/actions/post.actions";
import useTheme from "../../hooks/useTheme";

import styles from "./ManagePostPage.module.scss";
import { POST__GET_RESET } from "../../redux/constants/post.constants";

const ManagePostPage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const {
    navigate,
    params: { id, action },
  } = useHistory();
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const { loading: loadingCreate, result: created } = useSelector(
    (state: any) => state.posts.create
  );
  const { loading: loadingUpdate, result: updated } = useSelector(
    (state: any) => state.posts.update
  );
  const { loading: loadingPost, result: post }: IState<IPost> = useSelector(
    (state: any) => state.posts.post
  );

  useEffect(() => {
    reset();
    if (action === Action.edit && id) {
      dispatch(getPost(id));
    }
  }, []);

  useEffect(() => {
    setTitle("");
    setBody("");
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);

  useEffect(() => {
    if (created || updated) {
      reset();
      navigate("/");
    }
  }, [created, updated]);

  useEffect(() => {
    if (action === Action.add) {
      reset();
    }
  }, [action]);

  const reset = () => {
    dispatch({ type: POST__GET_RESET });
    setTitle("");
    setBody("");
  };

  const submitPost = () => {
    if (action === Action.add) {
      dispatch(createPost({ title, body }));
    } else {
      dispatch(updatePost(id!, { title, body }));
    }
  };

  return (
    <div className={[styles.wrapper, styles[theme]].join(" ")}>
      <Loader loading={loadingPost} />
      {!loadingPost && (
        <>
          <div className={styles.inputsWrapper}>
            <input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Description"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <div className={styles.buttonsWrapper}>
            <Button
              disabled={loadingCreate || loadingUpdate}
              onClick={submitPost}
            >
              {action!}
            </Button>
            <Button onClick={() => navigate("/")} type={ButtonType.secondary}>
              Cancel
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ManagePostPage;
