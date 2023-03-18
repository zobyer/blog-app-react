import * as yup from "yup";

import { searchpostschema } from "utils/schema/post/index";

export type SearchPostsForm = yup.InferType<typeof searchpostschema>;

export interface SearchPost {
  searchKey: string;
}

export interface searchForm {
  onFormSubmit: (formProps: SearchPost) => void;
}
