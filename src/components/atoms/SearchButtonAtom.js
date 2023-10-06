import React from 'react';

const SearchButtonAtom = ({ type, buttonTitle }) => (
  <button className="btn btn-outline-success" type={type}>
    {buttonTitle}
  </button>
);

SearchButtonAtom.defaultProps = {
  type: "text",
  buttonTitle: "Search"
};

export default SearchButtonAtom;
