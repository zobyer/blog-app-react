import React from "react";

import Styles from "./index.module.scss";
import { Banner as BannerProps } from "./index.type";

const Banner: React.FC<BannerProps> = ({ bgImageUrl, title, heading }) => {
  return (
    <div
      className={`${Styles.banner}`}
      style={{
        backgroundImage: `url(${require("assets/images/" + bgImageUrl)})`,
        aspectRatio: 166 / 29,
      }}
    >
      <div className={Styles.textContaienr}>
        <h4 className={`text-uppercase ${Styles.title}`}>{title}</h4>
        <h2 className={`text-uppercase ${Styles.heading}`}>{heading}</h2>
      </div>
    </div>
  );
};

export default Banner;
