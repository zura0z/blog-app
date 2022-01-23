import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import { postsReducer } from './reducers/post.reducer';
import { commentReducer } from './reducers/comment.reducer';
import { themeReducer } from './reducers/theme.reducer';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk];

const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentReducer,
    theme: themeReducer,
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;