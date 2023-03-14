import React, { useState } from "react";
import { ToggleIcon as ToggleIconProps } from "types/icons";
import Styles from "./index.module.scss";

const ToggleIcon: React.FC<ToggleIconProps> = ({ onToggleButtonClick }) => {
  const [btnClass, setBtnClass] = useState("");

  const onBtnClick = () => {
    btnClass === "" ? setBtnClass("cross") : setBtnClass("");
    if (onToggleButtonClick) onToggleButtonClick();
  };

  return (
    <div
      className={`${btnClass === "cross" ? Styles.cross : ""} ${
        Styles.container
      }`}
      onClick={onBtnClick}
    >
      <div className={Styles.bar1}></div>
      <div className={Styles.bar2}></div>
      <div className={Styles.bar3}></div>
    </div>
  );
};

export default ToggleIcon;
