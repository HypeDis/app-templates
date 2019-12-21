import logger from 'redux-logger';
import thunkMiddlware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';

// environment variable generated from webpack
const ENV = process.env.NODE_ENV;

const middleware = [];
/* eslint-disable no-undef */
if (ENV !== 'production') {
  middleware.push(logger);
}
middleware.push(thunkMiddlware);

let store = null;
if (ENV === 'production') {
  store = createStore(rootReducer, applyMiddleware(...middleware));
} else {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(
    rootReducer,
    /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware))
  );
}
/* eslint-enable */

export default store;
