import React from "react";
import style from "./CloseButton.module.scss";

const CloseButton = ({ position, onClick }) => {
  return (
    <div className={style.btn} style={position} onClick={() => onClick()}>
      <div className={style.mdiv}>
        <div className={style.md} />
      </div>
    </div>
  );
};

export default CloseButton;
