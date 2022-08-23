import React from "react";
import style from "./Message.module.scss";
import { displayMsgDateAndTime } from "../../utils/helpers/displayMsgDateAndTime";
import UserIcon from "../UI/UserIcon/UserIcon";

const Message = ({ userIcon, text, date, isReceived }) => {
  return (
    <div className={style.wrapper}>
      <div
        style={
          isReceived
            ? { display: "flex", justifyContent: "flex-start", height: "100%" }
            : { display: "none" }
        }
      >
        <UserIcon icon={userIcon} />
      </div>
      <div
        className={style.msg}
        style={!isReceived ? { alignItems: "flex-end" } : {}}
      >
        <div
          className={`${style.container} ${
            isReceived ? style.received : style.sent
          }`}
        >
          {text}
        </div>
        <div className={style.date}>{displayMsgDateAndTime(date)}</div>
      </div>
    </div>
  );
};

export default Message;
