import React from "react";
import { blogs } from "utils/const/api/blogs";
import RecentPostCard from "./card";
import Styles from "./index.module.scss";

const RecentPostContainer = () => {
  return (
    <div>
      <h2 className={`text-uppercase ${Styles.heading}`}>Recent Posts</h2>

      {blogs.map((blog) => (
        <RecentPostCard
          key={blog.id}
          title={blog.title}
          date={blog.date}
          slug={blog.slug}
        />
      ))}
    </div>
  );
};

export default RecentPostContainer;
