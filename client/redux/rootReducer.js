import { combineReducers } from 'redux';

import { testReducer } from './reducers';

const rootReducer = combineReducers({
  test: testReducer,
});

export default rootReducer;
