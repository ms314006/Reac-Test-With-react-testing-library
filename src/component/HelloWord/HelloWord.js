import React from 'react';
import PropTypes from 'prop-types';

const HelloWord = (props) => {
  const { word, } = props;
  return (
    <div>
      <input data-testid="dontClickMe" type="button" value="別點我" />
      <input data-testid="clickMe" type="button" value="點我" />
      <h1 className="first_h1">{`Hello! ${word}`}</h1>
      <h1>Hi!</h1>
    </div>
  );
};

HelloWord.propTypes = {
  word: PropTypes.string,
};

HelloWord.defaultProps = {
  word: 'default word',
};

export default HelloWord;
