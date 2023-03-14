import React from "react";

import Styles from "./index.module.scss";

const RectangleBlogCard = () => {
  return (
    <div className={Styles.blogContainer}>
      <img
        src={require("assets/images/blog-post-01.jpg")}
        alt=""
        loading="lazy"
        className={Styles.blogBannerImage}
      />

      <div className={Styles.informationContainer}></div>
    </div>
  );
};

export default RectangleBlogCard;
