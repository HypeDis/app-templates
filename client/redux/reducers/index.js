// import reducer files here
import { SET_TEST } from './../actionConstants';

export const testReducer = (state = 'TESTING REDUX...', action) => {
  switch (action.type) {
    case SET_TEST:
      return action.testCondition;
    default:
      return state;
  }
};
