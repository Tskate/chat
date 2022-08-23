import React, { useState } from "react";
import SendButton from "../Buttons/SendButton/SendButton";
import style from "./MessageInput.module.scss";

const MessageInput = ({ sendMsg }) => {
  const [value, setValue] = useState("");
  function sendMessage() {
    sendMsg(value);
    setValue("");
  }
  return (
    <div className={style.input}>
      <input
        type="text"
        placeholder="Type your message"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <SendButton onClick={sendMessage} />
    </div>
  );
};

export default MessageInput;
