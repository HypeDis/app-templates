import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTestConditionThunk } from './../redux/actionCreators';

const Main = props => {
  useEffect(() => {
    props.setTestCondition('PASSED');
  }, []);
  return (
    <div>
      <h1>Hello</h1>
      <h2>{props.test}</h2>
    </div>
  );
};

const { string, func } = PropTypes;
Main.propTypes = {
  test: string,
  setTestCondition: func,
};

const mapState = ({ test }) => ({ test });
const mapDispatch = dispatch => ({
  setTestCondition: condition => dispatch(setTestConditionThunk(condition)),
});
export default connect(mapState, mapDispatch)(Main);
