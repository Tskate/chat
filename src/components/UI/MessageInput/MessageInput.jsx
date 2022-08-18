import React from "react";
import SendButton from "../Buttons/SendButton/SendButton";
import style from "./MessageInput.module.scss";

const MessageInput = () => {
  return (
    <div className={style.input}>
      <input type="text" placeholder="Type your message" />
      <SendButton />
    </div>
  );
};

export default MessageInput;
