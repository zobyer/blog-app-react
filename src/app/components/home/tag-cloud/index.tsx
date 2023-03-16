import React from "react";
import CloudCard from "./card";

import Styles from "./index.module.scss";

const TagCloud = () => {
  return (
    <div>
      <h2 className={`text-uppercase ${Styles.title}`}>tag cloud</h2>

      <div className={Styles.wrapper}>
        <CloudCard name="lifeStyle" />
        <CloudCard name="lifeStyle" />
        <CloudCard name="lifeStyle" />
        <CloudCard name="lifeStyle" />
      </div>
    </div>
  );
};

export default TagCloud;
