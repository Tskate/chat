import React from "react";
import style from "./SendButton.module.scss";
import sendIcon from "../../../../assets/images/icons/send-icon.svg";

const SendButton = () => {
  return (
    <div className={style.container}>
      <img src={sendIcon} alt="send-icon" />
    </div>
  );
};

export default SendButton;
