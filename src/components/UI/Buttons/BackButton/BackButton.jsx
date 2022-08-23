import React from "react";
import style from "./BackButton.module.scss";
import icon from "../../../../assets/images/icons/back-arrow.svg";

const BackButton = ({ onClick, className }) => {
  return (
    <div
      className={style.container + " " + className}
      onClick={() => onClick()}
    >
      <img src={icon} alt="send-icon" />
    </div>
  );
};

export default BackButton;
