import { Dispatch } from "redux";

import { IPost } from "../../services/post.service";
import * as services from "../../services/post.service"
import * as actionTypes from "../constants/post.constants";

export const getPosts = () => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: actionTypes.POST__GET_ALL_REQUEST });

        const data = await services.getPosts()

        dispatch({ type: actionTypes.POST__GET_ALL_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: actionTypes.POST__GET_ALL_FAIL,
            payload: error
        });
    }
};

export const getPost = (id: number) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: actionTypes.POST__GET_REQUEST });

        const data = await services.getPost(id)

        dispatch({ type: actionTypes.POST__GET_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: actionTypes.POST__GET_FAIL,
            payload: error
        });
    }
};

export const createPost = (post: IPost) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: actionTypes.POST__CREATE_REQUEST });

        const data = await services.createPost(post)

        dispatch({ type: actionTypes.POST__CREATE_SUCCESS, payload: data });
        dispatch({ type: actionTypes.POST__CREATE_RESET });
    } catch (error) {
        dispatch({
            type: actionTypes.POST__CREATE_FAIL,
            payload: error
        });
    }
};

export const updatePost = (id: number, post: IPost) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: actionTypes.POST__UPDATE_REQUEST });

        const data = await services.updatePost(id, post)

        dispatch({ type: actionTypes.POST__UPDATE_SUCCESS, payload: data });
        dispatch({ type: actionTypes.POST__GET_RESET });
        dispatch({ type: actionTypes.POST__UPDATE_RESET });
    } catch (error) {
        dispatch({
            type: actionTypes.POST__UPDATE_FAIL,
            payload: error
        });
    }
};

export const deletePost = (id: number) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: actionTypes.POST__DELETE_REQUEST });

        const data = await services.deletePost(id)

        dispatch({ type: actionTypes.POST__DELETE_SUCCESS, payload: data });
        dispatch({ type: actionTypes.POST__DELETE_RESET });
    } catch (error) {
        dispatch({
            type: actionTypes.POST__DELETE_FAIL,
            payload: error
        });
    }
};