import Banner from "app/components/banner";
import ContactUsForm from "app/components/contact-us";
import SearchPostForm from "app/components/form/post-search";
import CategoriesContainer from "app/components/home/categories";
import RecentPostContainer from "app/components/home/recent-post";
import TagCloud from "app/components/home/tag-cloud";
import LayOut from "app/components/layout";
import React from "react";

import Styles from "styles/ContactUs.module.scss";

const ContactUs = () => {
  return (
    <div>
      <LayOut>
        <Banner
          bgImageUrl="assets/images/heading-bg.jpg"
          title="contact us"
          heading="LET’S STAY IN tOUCH!"
        />

        <div className={`container mx-auto ${Styles.wrapper}`}>
          <div className={Styles.left}>
            <ContactUsForm />
          </div>
          <div className={Styles.right}>
            <SearchPostForm />
            <RecentPostContainer />
            <CategoriesContainer />
            <TagCloud />
          </div>
        </div>
      </LayOut>
    </div>
  );
};

export default ContactUs;
