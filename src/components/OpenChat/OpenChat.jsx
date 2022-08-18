import React from "react";
import style from "./OpenChat.module.scss";
import UserIconWithStatus from "../UserIconWithStatus/UserIconWithStatus";
import MessageInput from "../UI/MessageInput/MessageInput";
import Dialog from "./Dialog/Dialog";

const OpenChat = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <UserIconWithStatus />
        <div className={style.userName}>Josefina</div>
      </div>
      <Dialog />
      <div className={style.input}>
        <MessageInput />
      </div>
    </div>
  );
};

export default OpenChat;
