import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import TextInputFields from "app/components/input-fields/text";
import Styles from "./index.module.scss";
import { SearchPostsForm, SearchPost } from "./index.type";
import { searchpostschema } from "utils/schema/post";

const SearchPostForm = () => {
  const onSearchPostSubmit = ({ searchKey }: SearchPost) => {
    console.log("called", searchKey);
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
    <form onSubmit={handleSubmit(onSearchPostSubmit)}>
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
