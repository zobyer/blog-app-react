import React from "react";

import AboutUsContainer from "app/components/about-us";
import Banner from "app/components/banner";
import LayOut from "app/components/layout";

const AboutUs = () => {
  return (
    <div>
      <LayOut>
        <Banner
          bgImageUrl="heading-bg.jpg"
          title="About Us"
          heading="more about us"
        />

        <AboutUsContainer />
      </LayOut>
    </div>
  );
};

export default AboutUs;
