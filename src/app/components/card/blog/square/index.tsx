import React from "react";
import Styles from "./index.module.scss";
import { Blog as BlogProps } from "./index.type";

const BlogCard: React.FC<BlogProps> = ({
  category,
  title,
  imageUrl,
  postedBy,
  date,
  noOfComments,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${require("assets/images/" + imageUrl)})`,
        backgroundSize: "cover",
      }}
      className={Styles.blogCard}
    >
      <div className={Styles.infoContainer}>
        <h6 className={`text-uppercase ${Styles.category}`}>{category}</h6>
        <h4 className={`text-capitalize ${Styles.title}`}>{title}</h4>
        <p className={Styles.othersInfo}>
          <span>{postedBy}</span>
          <span>{date}</span>
          <span>{noOfComments} comments</span>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
