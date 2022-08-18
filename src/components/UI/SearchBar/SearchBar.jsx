import React from "react";
import style from "./SearchBar.module.scss";
import searchIcon from "../../../assets/images/icons/search-icon.svg";

const SearchBar = ({ placeholderText }) => {
  return (
    <div className={style.searchBar}>
      <div className={style.icon}>
        <img src={searchIcon} alt="search-icon" />
      </div>
      <input type="text" placeholder={placeholderText} />
    </div>
  );
};

export default SearchBar;
