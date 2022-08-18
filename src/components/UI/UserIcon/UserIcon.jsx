import React from "react";
import style from "./UserIcon.module.scss";

const UserIcon = ({ icon }) => {
  return (
    <div className={style.icon}>
      <img src={icon} alt="user-icon" />
    </div>
  );
};

export default UserIcon;
