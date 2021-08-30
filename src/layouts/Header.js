import React from "react";
import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";

import { HeaderLeft } from "./HeaderLeft";
import { HeaderRight } from "./HeaderRight";

export const Header = () => {
  return (
    <div className="header">
     <HeaderLeft/>
      <HeaderRight/>
    </div>
  );
};
