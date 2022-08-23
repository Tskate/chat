import React from "react";
import style from "./Header.module.scss";
import SearchBar from "../../UI/SearchBar/SearchBar";
import UserIconWithStatus from "../../UserIconWithStatus/UserIconWithStatus";

const Header = () => {
  return (
    <div className={style.container}>
      <UserIconWithStatus />
      <SearchBar placeholderText="Search or start new chat" />
    </div>
  );
};

export default Header;
