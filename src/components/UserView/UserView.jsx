import React, { useContext } from "react";
import style from "./UserView.module.scss";
import UserIconWithStatus from "../UserIconWithStatus/UserIconWithStatus";
import { ChatContext } from "../MainPage/MainPage";

const UserView = ({ user }) => {
  const { openChat } = useContext(ChatContext);
  return (
    <div className={style.container} onClick={() => openChat(user.id)}>
      <UserIconWithStatus icon={user.icon} />
      <div className={style.body}>
        <p className={style.userName}>{user.name}</p>
      </div>
    </div>
  );
};

export default UserView;
