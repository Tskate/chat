import React from "react";
import ChatView from "../ChatView/ChatView";
import style from "./ChatList.module.scss";
import { chatSorting } from "../../../utils/helpers/chatSorting";

const ChatList = ({ chats }) => {
  return (
    <div className={style.content}>
      {chatSorting(chats).map((chat) => (
        <ChatView user={chat} key={chat.id} />
      ))}
    </div>
  );
};

export default ChatList;
