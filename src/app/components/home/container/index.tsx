import React from "react";

import Styles from "./index.module.scss";
import RectangleBlogCard from "app/components/card/blog/rectangle";
import RecentPostContainer from "../recent-post";
import SearchPostForm from "app/components/form/post-search";
import CategoriesContainer from "../categories";

const HomePageContainer = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.leftContainer}>
        <RectangleBlogCard />
      </div>
      <div className={Styles.rightContainer}>
        <SearchPostForm />
        <RecentPostContainer />
        <CategoriesContainer />
      </div>
    </div>
  );
};

export default HomePageContainer;
