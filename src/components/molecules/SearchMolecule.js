import React from "react";
import SearchBarAtom from "../atoms/SearchBarAtom";
import SearchButtonAtom from "../atoms/SearchButtonAtom";

const SearchMolecule = () => (
  <form className="d-flex">
    <SearchBarAtom type="search" placeholder="Search" />
    <SearchButtonAtom type="submit" buttonTitle="Search" />
  </form>
);

export default SearchMolecule;
