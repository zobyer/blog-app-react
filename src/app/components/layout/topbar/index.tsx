import React, { useState } from "react";

import ToggleIcon from "app/components/icons/toggle-icon";
import Styles from "./index.module.scss";
import { menus } from "utils/const/layout";
import RedirectLink from "app/components/redirect-link";

const AppHeadingName = () => {
  return (
    <h2>
      Stand Blog<em>.</em>
    </h2>
  );
};

const TopBar: React.FC = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  return (
    <nav className={Styles.navbar}>
      <div className={`container relative ${Styles.container}`}>
        <RedirectLink name={<AppHeadingName />} path="" />
        <div>
          <ul
            className={`${Styles.navbarCollapse} ${
              isNavbarVisible ? "visible" : Styles.hide
            }`}
          >
            {menus.map((menu) => (
              <li key={menu.id} className="text-capitalize">
                <RedirectLink
                  name={menu.name}
                  path={menu.redirectLink}
                  styledClasses={Styles.redirectLink}
                />
              </li>
            ))}
          </ul>
          <div className={Styles.navbarToggleIcon}>
            <ToggleIcon
              onToggleButtonClick={() =>
                setIsNavbarVisible((isNavbarVisible) => !isNavbarVisible)
              }
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
