import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
    <h1>{props.title}</h1>
);

Header.defaultProps = {
    title: 'Weather Monitor'
  };
  
  Header.propTypes = {
    title: PropTypes.string
  };
  
export {Header};