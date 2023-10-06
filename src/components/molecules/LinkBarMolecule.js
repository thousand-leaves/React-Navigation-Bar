import React from "react";
import NavBarLinkAtom from "../atoms/NavBarLinkAtom";

const LinkBarMolecule = () => (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <NavBarLinkAtom icon="fa fa-home mx-1" linkTitle="Home" />
      <NavBarLinkAtom icon="fa fa-plus mx-1" linkTitle="Register" />
      <NavBarLinkAtom icon="fa fa-question mx-1" linkTitle="About Us" />
    </ul>
  );

export default LinkBarMolecule;
