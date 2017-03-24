import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from '../reducer/topic.js';

const middleware = applyMiddleware(promise(), thunk);

export default createStore(reducer, middleware);
