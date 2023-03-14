import React from "react";
import { NavLink } from "react-router-dom";

import { RedirectLink as RedirectLinkProps } from "./index.types";
import Styles from "./index.module.scss";

const RedirectLink: React.FC<RedirectLinkProps> = ({
  name,
  path,
  styledClasses = "",
}) => {
  return (
    <NavLink to={path} className={`${Styles.redirectLink} ${styledClasses}`}>
      {name}
    </NavLink>
  );
};

export default RedirectLink;
