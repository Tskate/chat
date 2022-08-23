import React from "react";
import UserIcon from "../UI/UserIcon/UserIcon";
import defaultIcon from "../../assets/images/user-default-icon.svg";
import statusIcon from "../../assets/images/icons/active-status.svg";
import style from "./UserStatusWithIcon.module.scss";

const UserIconWithStatus = () => {
  return (
    <div className={style.container}>
      <UserIcon icon={defaultIcon} />
      <div className={style.status}>
        <img src={statusIcon} alt="status-icon" />
      </div>
    </div>
  );
};

export default UserIconWithStatus;
