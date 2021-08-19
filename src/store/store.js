import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);
export const store = createStore(rootReducer, middlewareEnhancer);