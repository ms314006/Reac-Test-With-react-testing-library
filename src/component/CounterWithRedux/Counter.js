import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCounter } from '../../actions/Counter';

const Counter = (props) => {
  const { count, addCount, } = props;
  return (
    <div>
      <span data-testid="display_count">{`點了${count}下`}</span>
      <br />
      <button className="add_button" type="button" onClick={() => { addCount(1); }}>點我加 1</button>
      <button className="add_button" type="button" onClick={() => { addCount(2); }}>點我加 2</button>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number,
  addCount: PropTypes.func,
};

Counter.defaultProps = {
  count: 0,
  addCount: () => { console.log('error'); },
};

const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToProps = dispatch => ({
  addCount: addQuantity => dispatch(addCounter(addQuantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
