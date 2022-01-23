import * as actionType from '../constants/comment.constants';
import { common, IAction } from './post.reducer';


const initialState = {
    create: { ...common },
}

export const commentReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        // Create Comment
        case actionType.COMMENT__CREATE_REQUEST:
            return { ...state, create: { ...common, loading: true } };
        case actionType.COMMENT__CREATE_SUCCESS:
            return { ...state, create: { ...common, result: action.payload } };
        case actionType.COMMENT__CREATE_FAIL:
            return { ...state, create: { ...common, error: action.payload } };
        //

        default:
            return state;
    }
};