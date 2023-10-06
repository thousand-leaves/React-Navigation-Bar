import React from 'react';
import PropTypes from 'prop-types';

const SearchBarAtom = ({ type, placeholder }) => (
    <input
      className="form-control me-2"
      type={type}
      placeholder={placeholder}
    />
  );

SearchBarAtom.defaultProps = {
  type: "text",
  placeholder: "Search"
};

SearchBarAtom.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default SearchBarAtom;
