import React, { useEffect, useRef } from "react";
import style from "./Dialog.module.scss";
import Message from "../../Message/Message";

const Dialog = ({ icon, dialog }) => {
  const bottomRef = useRef(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [dialog.length]);

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
      <div ref={bottomRef} />
    </div>
  );
};

export default Dialog;
