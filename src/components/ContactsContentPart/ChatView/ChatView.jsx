import React from "react";
import UserIconWithStatus from "../../UserIconWithStatus/UserIconWithStatus";
import style from "./ChatView.module.scss";

const ChatView = () => {
  return (
    <div className={style.container}>
      <UserIconWithStatus />
      <div className={style.body}>
        <p className={style.userName}>Alice Freeman</p>
        <p className={style.lastMsg}>You are the worst!</p>
      </div>
      <div className={style.date}>
        <p>Jun 12, 2017</p>
      </div>
    </div>
  );
};

export default ChatView;
