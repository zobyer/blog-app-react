import React from "react";

import Styles from "./index.module.scss";

const Banner = () => {
  return (
    <div
      className={`${Styles.banner}`}
      style={{
        backgroundImage: `url(${require("assets/images/heading-bg.jpg")})`,
        aspectRatio: 166 / 29,
      }}
    >
      <div className={Styles.textContaienr}>
        <h4 className={`text-uppercase ${Styles.title}`}>contact us</h4>
        <h2 className={`text-uppercase ${Styles.heading}`}>
          LET’S STAY IN TOUCH!
        </h2>
      </div>
    </div>
  );
};

export default Banner;
