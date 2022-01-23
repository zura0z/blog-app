import { Dispatch } from "redux";

import * as services from "../../services/comment.service";
import * as actionTypes from "../constants/comment.constants";

export const createComment = (postId: number, body: string) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: actionTypes.COMMENT__CREATE_REQUEST });

        const data = await services.createComment(postId, body);

        dispatch({ type: actionTypes.COMMENT__CREATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: actionTypes.COMMENT__CREATE_FAIL,
            payload: error
        });
    }
};