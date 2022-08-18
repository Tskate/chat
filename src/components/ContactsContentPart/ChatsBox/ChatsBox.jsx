import React from "react";
import style from "./ChatsBox.module.scss";
import ChatList from "../ChatList/ChatList";

const ChatsBox = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>Chats</div>
      <ChatList />
    </div>
  );
};

export default ChatsBox;
