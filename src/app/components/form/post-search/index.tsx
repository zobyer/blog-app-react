import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import TextInputFields from "app/components/input-fields/text";
import Styles from "./index.module.scss";
import {
  SearchPostsForm,
  SearchPost,
  searchForm as SearchFormProps,
} from "./index.type";
import { searchpostschema } from "utils/schema/post";

const SearchPostForm: React.FC<SearchFormProps> = ({ onFormSubmit }) => {
  const onSearchPostSubmit = ({ searchKey }: SearchPost) => {
    onFormSubmit;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchPostsForm>({
    mode: "onChange",
    resolver: yupResolver(searchpostschema),
  });

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <TextInputFields
        placeholder="type to search"
        styledClassName={`text-uppercase ${Styles.searchTextField}`}
        register={{ ...register("searchKey") }}
        error={errors.searchKey}
      />
    </form>
  );
};

export default SearchPostForm;
