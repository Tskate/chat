import React, { useState } from "react";
import style from "./SearchBar.module.scss";
import searchIcon from "../../../assets/images/icons/search-icon.svg";

const SearchBar = ({ placeholderText, onChange, request }) => {
  const [value, setValue] = useState("");

  return (
    <div className={style.searchBar}>
      <div className={style.icon}>
        <img src={searchIcon} alt="search-icon" />
      </div>
      <input
        type="text"
        placeholder={placeholderText}
        value={!request ? "" : value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
