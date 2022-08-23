import React, { useContext } from "react";
import UserIconWithStatus from "../../UserIconWithStatus/UserIconWithStatus";
import style from "./ChatView.module.scss";
import { displayDateInChatView } from "../../../utils/helpers/displayDateInChatView";
import { ChatContext } from "../../MainPage/MainPage";

const ChatView = ({ userId }) => {
  const { openChat, contactList } = useContext(ChatContext);
  const user = contactList.filter((u) => u.id === userId)[0];
  function onChatViewClick() {
    openChat(user.id);
  }

  return (
    <div className={style.container} onClick={onChatViewClick}>
      <UserIconWithStatus icon={user.icon} />
      <div className={style.body}>
        <p className={style.userName}>{user.name}</p>
        <p className={style.lastMsg}>{user.dialogHistory.at(-1).text}</p>
      </div>
      <div className={style.date}>
        <p>{displayDateInChatView(user.dialogHistory.at(-1).date)}</p>
      </div>
    </div>
  );
};

export default ChatView;
