import React from "react";

import Styles from "./index.module.scss";
import RectangleBlogCard from "app/components/card/blog/rectangle";
import TextInputFields from "app/components/input-fields/text";
import RecentPostContainer from "../recent-post";

const HomePageContainer = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.leftContainer}>
        <RectangleBlogCard />
      </div>
      <div className={Styles.rightContainer}>
        <TextInputFields
          styledClassName={`text-uppercase ${Styles.searchTextField}`}
        />

        <RecentPostContainer />
      </div>
    </div>
  );
};

export default HomePageContainer;
