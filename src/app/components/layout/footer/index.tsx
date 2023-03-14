import React from "react";

import RedirectLink from "app/components/redirect-link";
import { socialLinks } from "utils/const/layout";
import Styles from "./index.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={`${Styles.container}`}>
      <ul className="container">
        {socialLinks.map((socialLink) => (
          <li key={socialLink.id} className="text-uppercase">
            <RedirectLink
              name={socialLink.name}
              path="/"
              styledClasses={Styles.redirectLink}
            />
          </li>
        ))}
      </ul>

      <div className="container mx-auto">
        <p className={`text-uppercase ${Styles.copyrightText}`}>
          Copyright 2020 Co.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
