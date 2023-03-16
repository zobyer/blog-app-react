import RedirectLink from "app/components/redirect-link";
import React from "react";

import Styles from "./index.module.scss";

const RecentPostCard = () => {
  return (
    <RedirectLink path="/">
      <div className={Styles.container}>
        <h2 className={Styles.title}>
          Vestibulum id turpis porttitor sapien facilisis scelerisque
        </h2>

        <p className={Styles.date}>May 31, 2020</p>
      </div>
    </RedirectLink>
  );
};

export default RecentPostCard;
