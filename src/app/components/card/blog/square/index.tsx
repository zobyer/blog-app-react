import React from "react";
import Styles from "./index.module.scss";

const BlogCard = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${require("assets/images/banner-item-01.jpg")})`,
        backgroundSize: "cover",
      }}
      className={Styles.blogCard}
    >
      <div className={Styles.infoContainer}>
        <h6 className={Styles.heading}>Fashion</h6>
        <h4 className={Styles.title}>Morbi dapibus condimentum</h4>
        <p className={Styles.othersInfo}>
          <span>Admin</span>
          <span>May 12, 2022</span>
          <span>comments</span>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
