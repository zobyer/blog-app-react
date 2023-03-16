import React from "react";

import Styles from "./index.module.scss";
import { TextInputField as TextInputFieldProps } from "./index.type";

const TextInputFields: React.FC<TextInputFieldProps> = (props) => {
  const {
    placeholder = "",
    styledClassName = "",
    isLabelVisible = false,
    register,
    error,
  } = props;

  return (
    <>
      {isLabelVisible && <label htmlFor="textInputField">Enter</label>}
      <input
        type="text"
        id="textInputField"
        className={`${styledClassName} ${Styles.textInput}`}
        placeholder={placeholder}
        {...register}
      />

      {error && <p className={Styles.errorMessage}>{error.message}</p>}
    </>
  );
};

export default TextInputFields;
