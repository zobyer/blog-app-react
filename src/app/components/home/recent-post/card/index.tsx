import RedirectLink from "app/components/redirect-link";
import React from "react";

import Styles from "./index.module.scss";
import { RecentPost } from "./index.type";

const RecentPostCard: React.FC<RecentPost> = ({ title, date }) => {
  return (
    <RedirectLink path="/">
      <div className={Styles.container}>
        <h2 className={Styles.title}>{title} </h2>

        <p className={Styles.date}>{date}</p>
      </div>
    </RedirectLink>
  );
};

export default RecentPostCard;
