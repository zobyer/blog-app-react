import * as yup from "yup";

export const searchpostschema = yup
  .object({
    searchKey: yup.string().required("Please enter a post name"),
  })
  .required();
