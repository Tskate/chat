import React, { useContext } from "react";
import style from "./Header.module.scss";
import SearchBar from "../../UI/SearchBar/SearchBar";
import UserIconWithStatus from "../../UserIconWithStatus/UserIconWithStatus";
import { SearchContext } from "../ContactsContentPart";

const Header = () => {
  const { request, setRequest } = useContext(SearchContext);
  return (
    <div className={style.container}>
      <UserIconWithStatus />
      <SearchBar
        placeholderText="Search or start new chat"
        value={request}
        onChange={setRequest}
      />
    </div>
  );
};

export default Header;
