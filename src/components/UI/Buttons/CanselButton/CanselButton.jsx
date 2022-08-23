import React from "react";
import style from "./CanselButton.module.scss";

const CanselButton = ({ hidden, onClick }) => {
  return (
    <div className={style.button} onClick={() => onClick()} style={hidden}>
      Cansel
    </div>
  );
};

export default CanselButton;
