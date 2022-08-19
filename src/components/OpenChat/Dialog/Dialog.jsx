import React from "react";
import style from "./Dialog.module.scss";
import Message from "../../Message/Message";

const Dialog = ({ icon, dialog }) => {
  return (
    <div className={style.content}>
      {dialog.map((msg) => (
        <Message
          key={msg.date}
          userIcon={icon}
          text={msg.text}
          date={msg.date}
          isReceived={msg.isReceived}
        />
      ))}
    </div>
  );
};

export default Dialog;
