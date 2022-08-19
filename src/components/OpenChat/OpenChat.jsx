import React from "react";
import style from "./OpenChat.module.scss";
import UserIconWithStatus from "../UserIconWithStatus/UserIconWithStatus";
import MessageInput from "../UI/MessageInput/MessageInput";
import Dialog from "./Dialog/Dialog";

const OpenChat = ({ user }) => {
  function sendMsg(msg) {
    const newMsq = { text: msg, date: Date.now(), isReceiver: 0 };
    console.log(newMsq);
  }
  function renderChat() {
    if (user) {
      return (
        <div className={style.container}>
          <div className={style.header}>
            <UserIconWithStatus icon={user.icon} />
            <div className={style.userName}>{user.name}</div>
          </div>
          <Dialog icon={user.icon} dialog={user.dialogHistory} />
          <div className={style.input}>
            <MessageInput sendMsg={sendMsg} />
          </div>
        </div>
      );
    } else {
      return (
        <div className={style.container}>Select a chat to start messaging</div>
      );
    }
  }
  return renderChat();
};

export default OpenChat;
