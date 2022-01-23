import * as actionType from '../constants/post.constants';

export interface IAction {
    type: string,
    payload: unknown,
}

export const common = { loading: false, result: null, error: null }

const initialState = {
    allPosts: { ...common },
    post: { ...common },
    create: { ...common },
    update: { ...common },
    delete: { ...common }
}

export const postsReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        // All Posts
        case actionType.POST__GET_ALL_REQUEST:
            return { ...state, allPosts: { ...common, loading: true } };
        case actionType.POST__GET_ALL_SUCCESS:
            return { ...state, allPosts: { ...common, result: action.payload } };
        case actionType.POST__GET_ALL_FAIL:
            return { ...state, allPosts: { ...common, error: action.payload } };
        //

        // Post
        case actionType.POST__GET_REQUEST:
            return { ...state, post: { ...common, loading: true } };
        case actionType.POST__GET_SUCCESS:
            return { ...state, post: { ...common, result: action.payload } };
        case actionType.POST__GET_FAIL:
            return { ...state, post: { ...common, error: action.payload } };
        case actionType.POST__GET_RESET:
            return { ...state, post: { ...common } };
        //

        // Create
        case actionType.POST__CREATE_REQUEST:
            return { ...state, create: { ...common, loading: true } };
        case actionType.POST__CREATE_SUCCESS:
            return { ...state, create: { ...common, result: action.payload } };
        case actionType.POST__CREATE_FAIL:
            return { ...state, create: { ...common, error: action.payload } };
        case actionType.POST__CREATE_RESET:
            return { ...state, create: { ...common } };
        //

        // Update
        case actionType.POST__UPDATE_REQUEST:
            return { ...state, update: { ...common, loading: true } };
        case actionType.POST__UPDATE_SUCCESS:
            return { ...state, update: { ...common, result: action.payload } };
        case actionType.POST__UPDATE_FAIL:
            return { ...state, update: { ...common, error: action.payload } };
        case actionType.POST__UPDATE_RESET:
            return { ...state, update: { ...common } };
        //

        // Delete
        case actionType.POST__DELETE_REQUEST:
            return { ...state, delete: { ...common, loading: true } };
        case actionType.POST__DELETE_SUCCESS:
            return { ...state, delete: { ...common, result: action.payload } };
        case actionType.POST__DELETE_FAIL:
            return { ...state, delete: { ...common, error: action.payload } };
        case actionType.POST__DELETE_RESET:
            return { ...state, delete: { ...common } };
        //

        default:
            return state;
    }
};