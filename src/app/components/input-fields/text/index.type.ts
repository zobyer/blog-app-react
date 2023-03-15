import { UseFormRegisterReturn, FieldError } from "react-hook-form";

export interface TextInputField {
  isLabelVisible?: boolean;
  placeholder?: string;
  styledClassName?: string;
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
}
