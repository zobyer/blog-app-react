import React from "react";

import Styles from "./index.module.scss";
import RectangleBlogCard from "app/components/card/blog/rectangle";

const HomePageContainer = () => {
  return (
    <div>
      <div className={Styles.leftContainer}>
        <RectangleBlogCard />
      </div>
      <div></div>
    </div>
  );
};

export default HomePageContainer;
