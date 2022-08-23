import React, { useContext } from "react";
import style from "./OpenChat.module.scss";
import UserIconWithStatus from "../UserIconWithStatus/UserIconWithStatus";
import MessageInput from "../UI/MessageInput/MessageInput";
import Dialog from "./Dialog/Dialog";
import { ChatContext } from "../MainPage/MainPage";
import BackButton from "../UI/Buttons/BackButton/BackButton";

const OpenChat = ({ userId, getNewMessage, hideChat, styleForAdaptive }) => {
  const { contactList, setContactList } = useContext(ChatContext);

  function sendMsg(msg) {
    const newMsg = { text: msg, date: Date.now(), isReceived: 0 };
    let foundUser = contactList.filter((u) => u.id === userId)[0];
    let userList = contactList;
    foundUser.dialogHistory.push(newMsg);
    userList = userList.map((u) => (u.id === userId ? foundUser : u));
    setContactList(userList);
    getNewMessage(userId);
  }

  function renderChat() {
    if (userId) {
      let user = contactList.filter((u) => u.id === userId)[0];
      return (
        <div className={style.container + " " + styleForAdaptive}>
          <div className={style.header}>
            <BackButton onClick={() => hideChat()} className={style.backBtn} />
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
        <div className={style.container + " " + styleForAdaptive}>
          Select a chat to start messaging
        </div>
      );
    }
  }
  return renderChat();
};

export default OpenChat;
