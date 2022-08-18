import React from "react";
import ChatView from "../ChatView/ChatView";
import style from "./ChatList.module.scss";

const ChatList = () => {
  return (
    <div className={style.content}>
      <ChatView />
      <ChatView />
      <ChatView />
      <ChatView />
      <ChatView />
      <ChatView />
    </div>
  );
};

export default ChatList;
