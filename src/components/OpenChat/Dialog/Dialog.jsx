import React from "react";
import style from "./Dialog.module.scss";
import Message from "../../Message/Message";

const Dialog = () => {
  return (
    <div className={style.content}>
      <Message text={"Hello"} isReceived={true} />
      <Message text={"Hello jjkkkkkkkkk"} isReceived={false} />
    </div>
  );
};

export default Dialog;
