import React from "react";
import style from "../BackButton/BackButton.module.scss";
import icon from "../../../../assets/images/icons/logout_icon_183821.svg";

const ExitButton = ({ className, onClick }) => {
  return (
    <div
      className={style.container + " " + className}
      onClick={() => onClick()}
    >
      <img src={icon} alt="exit-icon" />
    </div>
  );
};

export default ExitButton;
