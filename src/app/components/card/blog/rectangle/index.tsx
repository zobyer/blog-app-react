import RedirectLink from "app/components/redirect-link";
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

      <div className={Styles.informationContainer}>
        <RedirectLink path="/">
          <h4 className={`text-uppercase ${Styles.category}`}>Lifestyle</h4>
          <h3 className={Styles.title}>Best Template Website for HTML CSS</h3>
        </RedirectLink>

        <p className={Styles.othersInfo}>
          <span>Admin</span>
          <span>May 31, 2022</span>
          <span>12 Comments</span>
        </p>

        <p className={Styles.blogDetails}>
          Stand Blog is a free HTML CSS template for your CMS theme. You can
          easily adapt or customize it for any kind of CMS or website builder.
          You are allowed to use it for your business. You are NOT allowed to
          re-distribute the template ZIP file on any template collection site
          for the download
        </p>
      </div>
    </div>
  );
};

export default RectangleBlogCard;
