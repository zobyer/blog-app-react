import React from "react";

import Styles from "./index.module.scss";
import RectangleBlogCard from "app/components/card/blog/rectangle";
import TextInputFields from "app/components/input-fields/text";

const HomePageContainer = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.leftContainer}>
        <RectangleBlogCard />
      </div>
      <div className={Styles.rightContainer}>
        <TextInputFields />
      </div>
    </div>
  );
};

export default HomePageContainer;
