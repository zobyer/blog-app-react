import React from "react";

import RedirectLink from "app/components/redirect-link";
import Styles from "./index.module.scss";

const CategoriesContainer = () => {
  return (
    <div>
      <h2 className={`text-uppercase ${Styles.title}`}>Categories</h2>

      <ul className={Styles.categories}>
        <li>
          <RedirectLink path="/" styledClasses={Styles.categoryRedirectLink}>
            - nature lifestyle
          </RedirectLink>
        </li>

        <li>
          <RedirectLink path="/" styledClasses={Styles.categoryRedirectLink}>
            - nature lifestyle
          </RedirectLink>
        </li>

        <li>
          <RedirectLink path="/" styledClasses={Styles.categoryRedirectLink}>
            - nature lifestyle
          </RedirectLink>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesContainer;
