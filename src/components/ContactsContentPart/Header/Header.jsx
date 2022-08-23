import React, { useContext } from "react";
import style from "./Header.module.scss";
import SearchBar from "../../UI/SearchBar/SearchBar";
import UserIconWithStatus from "../../UserIconWithStatus/UserIconWithStatus";
import { SearchContext } from "../ContactsContentPart";
import CanselButton from "../../UI/Buttons/CanselButton/CanselButton";
import { AuthContext } from "../../../App";
import ExitButton from "../../UI/Buttons/ExitButton/ExitButton";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { request, setRequest } = useContext(SearchContext);
  const { authUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function canselSearch() {
    setRequest(null);
  }
  const toLogOutPage = () => {
    navigate("/");
  };
  return (
    <div className={style.container}>
      <div className={style.authUser}>
        <UserIconWithStatus icon={authUser.imageUrl} />
        <div className={style.name}>{authUser.name}</div>
        <ExitButton onClick={toLogOutPage} />
      </div>
      <div className={style.searchContainer}>
        <SearchBar
          placeholderText="Search or start new chat"
          request={request}
          onChange={setRequest}
        />
        <CanselButton
          onClick={canselSearch}
          hidden={request === null ? { display: "none" } : {}}
        />
      </div>
    </div>
  );
};

export default Header;
