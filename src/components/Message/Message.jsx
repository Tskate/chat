import React from "react";
import style from "./Message.module.scss";

const Message = ({ text, isReceived }) => {
  return (
    <div
      className={style.wrapper}
      style={!isReceived ? { direction: "rtl" } : {}}
    >
      <div
        className={`${style.container} ${
          isReceived ? style.received : style.sent
        }`}
      >
        {text}
      </div>
      <div className={style.date}>4/22/17, 4:10 AM</div>
    </div>
  );
};

export default Message;
