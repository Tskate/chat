import React, { useContext, useEffect, useState } from "react";
import UserIconWithStatus from "../../UserIconWithStatus/UserIconWithStatus";
import style from "./ChatView.module.scss";
import { displayDateInChatView } from "../../../utils/helpers/displayDateInChatView";
import { ChatContext } from "../../../App";

const ChatView = ({ user }) => {
  const noMsg = { text: "", date: "" };
  const [lastMsg, setLastMsg] = useState(noMsg);
  const { openChat } = useContext(ChatContext);

  function getLastMsg() {
    user.dialogHistory.length
      ? setLastMsg({
          text: user.dialogHistory.at(-1).text,
          date: displayDateInChatView(user.dialogHistory.at(-1).date),
        })
      : setLastMsg(noMsg);
  }

  useEffect(() => {
    getLastMsg();
  }, []);

  return (
    <div className={style.container} onClick={() => openChat(user)}>
      <UserIconWithStatus icon={user.icon} />
      <div className={style.body}>
        <p className={style.userName}>{user.name}</p>
        <p className={style.lastMsg}>{lastMsg.text}</p>
      </div>
      <div className={style.date}>
        <p>{lastMsg.date}</p>
      </div>
    </div>
  );
};

export default ChatView;
