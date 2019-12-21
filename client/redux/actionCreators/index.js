// import action creators here
import { SET_TEST } from './../actionConstants';

export const setTest = testCondition => ({
  type: SET_TEST,
  testCondition,
});

export const setTestConditionThunk = testCondition => dispatch => {
  setTimeout(() => {
    dispatch(setTest(testCondition));
  }, 1000);
};
