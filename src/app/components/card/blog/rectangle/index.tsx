import RedirectLink from "app/components/redirect-link";
import React from "react";

import Styles from "./index.module.scss";
import { Blog as BlogProps } from "./index.type";

const RectangleBlogCard: React.FC<BlogProps> = ({
  category,
  title,
  userType,
  date,
  noOfComments,
  details,
}) => {
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
          <h4 className={`text-uppercase ${Styles.category}`}>{category}</h4>
          <h3 className={Styles.title}>{title}</h3>
        </RedirectLink>

        <p className={Styles.othersInfo}>
          <span>{userType}</span>
          <span>{date}</span>
          <span>{noOfComments} Comments</span>
        </p>

        <p className={Styles.blogDetails}>{details}</p>
      </div>
    </div>
  );
};

export default RectangleBlogCard;
