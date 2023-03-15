import React from "react";
import Styles from "./index.module.scss";

const TextInputFields: React.FC = () => {
  return (
    <>
      <input type="text" className={Styles.textInput} />
    </>
  );
};

export default TextInputFields;
