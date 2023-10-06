import PropTypes from "prop-types";
import React from "react";
import TitleAtom from "../atoms/TitleAtom";
import ButtonAtom from "../atoms/ButtonAtom";
import LinkBarMolecule from "../molecules/LinkBarMolecule";
import SearchMolecule from "../molecules/SearchMolecule";

const HeaderOrganism = ({ title }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-1">
    <div className="container-fluid">
      <TitleAtom title={title} />
      <ButtonAtom />

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <LinkBarMolecule />
        <SearchMolecule />
      </div>
    </div>
  </nav>
);

HeaderOrganism.defaultProps = {
  title: "Portal",
};

HeaderOrganism.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeaderOrganism;

