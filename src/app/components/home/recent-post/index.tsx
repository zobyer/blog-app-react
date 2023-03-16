import React from "react";
import RecentPostCard from "./card";
import Styles from "./index.module.scss";

const RecentPostContainer = () => {
  return (
    <div>
      <h2 className={`text-uppercase ${Styles.heading}`}>Recent Posts</h2>

      <RecentPostCard />
      <RecentPostCard />
    </div>
  );
};

export default RecentPostContainer;
