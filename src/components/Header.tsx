import React from "react";

import "../styles/header.scss";
import Logo from "../img/Logo-PNG.png";
import IconSearch from "../img/Icon-Search.svg";

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="header__logo" />
      <form className="search">
        <input
          type="text"
          className="search__field"
          placeholder="Search over 1,000 cocktail recipes..."
        ></input>
        <button className="btn search__btn">
          <img src={IconSearch} alt="Search" />
          <span>Search</span>
        </button>
      </form>
    </header>
  );
};

export default Header;
