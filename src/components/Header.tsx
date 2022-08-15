import React, { useState } from "react";

import "../styles/header.scss";
import Logo from "../img/Logo-PNG.png";
import IconSearch from "../img/Icon-Search.svg";

import SearchResults from "./SearchResults";

const Header: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [showSearchResult, setShowSearchResult] = useState<boolean>(false);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (keyword.trim().toLowerCase() === "") {
      alert("Please enter keyword");
      setShowSearchResult(false);
    } else {
      setShowSearchResult(true);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <img src={Logo} alt="Logo" className="header__logo" />
        <form className="search" onSubmit={submitHandler}>
          <input
            value={keyword}
            type="text"
            className="search__field"
            placeholder="Search over 1,000 cocktail recipes..."
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          ></input>
          <button className="btn search__btn" type="submit">
            <img src={IconSearch} alt="Search" />
            <span>Search</span>
          </button>
        </form>
      </header>

      {showSearchResult && <SearchResults keyword={keyword} />}
    </div>
  );
};

export default Header;
