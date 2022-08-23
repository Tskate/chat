import React from "react";
import UserIcon from "../UI/UserIcon/UserIcon";
import style from "./Notification.module.scss";
import CloseButton from "../UI/Buttons/CloseButton/CloseButton";

const Notification = ({ hide, content, close }) => {
  function renderContent() {
    if (content) {
      return (
        <div className={style.container} style={hide}>
          <CloseButton position={{ alignSelf: "flex-end" }} onClick={close} />
          <div className={style.body}>
            <UserIcon icon={content.icon} />
            <div className={style.content}>
              <p className={style.name}>{content.name}</p>
              <p className={style.msgText}>{content.text}</p>
            </div>
          </div>
        </div>
      );
    }
  }
  return renderContent();
};

export default Notification;
