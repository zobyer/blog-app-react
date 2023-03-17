import React from "react";

import RedirectLink from "app/components/redirect-link";
import Styles from "./index.module.scss";
import { categories } from "utils/const/api/categories";

const CategoriesContainer = () => {
  return (
    <div>
      <h2 className={`text-uppercase ${Styles.title}`}>Categories</h2>

      <ul className={Styles.categories}>
        {categories.map((category) => (
          <li key={category.id}>
            <RedirectLink path="/" styledClasses={Styles.categoryRedirectLink}>
              - {category.name}
            </RedirectLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesContainer;
