import React from "react";
import style from "./UserIcon.module.scss";
import defaultIcon from "../../../assets/images/user-default-icon.svg";

const UserIcon = ({ icon }) => {
  return (
    <div className={style.icon}>
      <img src={icon ? icon : defaultIcon} alt="user-icon" />
    </div>
  );
};

export default UserIcon;
