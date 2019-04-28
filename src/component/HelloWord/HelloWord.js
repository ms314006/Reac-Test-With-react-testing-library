import React from 'react';
import PropTypes from 'prop-types';

const HelloWord = (props) => {
  const { word, } = props;
  return <h1>{`Hello! ${word}`}</h1>;
};

HelloWord.propTypes = {
  word: PropTypes.string,
};

HelloWord.defaultProps = {
  word: 'default word',
};

export default HelloWord;
