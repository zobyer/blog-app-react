import React from "react";

import Styles from "./index.module.scss";
import { TextInputField as TextInputFieldProps } from "./index.type";

const TextInputFields: React.FC<TextInputFieldProps> = (props) => {
  const {
    placeholder = "type to search",
    styledClassName = "",
    isLabelVisible = false,
  } = props;

  return (
    <>
      {isLabelVisible && <label htmlFor="textInputField">Enter</label>}
      <input
        type="text"
        id="textInputField"
        className={`${styledClassName} ${Styles.textInput}`}
        placeholder={placeholder}
      />
    </>
  );
};

export default TextInputFields;
