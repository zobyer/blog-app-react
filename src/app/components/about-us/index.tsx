import React from "react";

import AboutUsImage from "assets/images/about-us.jpg";
import Styles from "./index.module.scss";

const AboutUsContainer = () => {
  return (
    <div className={`container mx-auto ${Styles.wrapper}`}>
      <img src={AboutUsImage} alt="" className={Styles.banner} />

      <p className={Styles.description}>
        Pellentesque quis luctus libero. Maecenas pretium molestie erat, ac
        tincidunt leo gravida ac. Cras ullamcorper eu ipsum eu sollicitudin.
        Fusce vitae commodo turpis. Integer ullamcorper purus nec justo mollis
        fermentum. Nunc imperdiet erat nec lacinia laoreet.
        <br />
        <br />
        Pellentesque quis luctus libero. Maecenas pretium molestie erat, ac
        tincidunt leo gravida ac. Cras ullamcorper eu ipsum eu sollicitudin.
        Fusce vitae commodo turpis. Integer ullamcorper purus nec justo mollis
        fermentum. Nunc imperdiet erat nec lacinia laoreet.
      </p>
    </div>
  );
};

export default AboutUsContainer;
