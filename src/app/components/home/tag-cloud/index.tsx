import React from "react";
import CloudCard from "./card";

import { tags } from "utils/const/api/categories";
import Styles from "./index.module.scss";

const TagCloud = () => {
  return (
    <div>
      <h2 className={`text-uppercase ${Styles.title}`}>tag cloud</h2>

      <div className={Styles.wrapper}>
        {tags.map((tag) => (
          <CloudCard key={tag.id} name={tag.name} />
        ))}
      </div>
    </div>
  );
};

export default TagCloud;
