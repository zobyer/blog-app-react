import Banner from "app/components/banner";
import RectangleBlogCard from "app/components/card/blog/rectangle";
import SearchPostForm from "app/components/form/post-search";
import CategoriesContainer from "app/components/home/categories";
import RecentPostContainer from "app/components/home/recent-post";
import TagCloud from "app/components/home/tag-cloud";
import LayOut from "app/components/layout";
import React from "react";

import Styles from "styles/PostDetails.module.scss";

const PostDetails = () => {
  return (
    <div>
      <LayOut>
        <Banner
          bgImageUrl="heading-bg.jpg"
          title="Post details"
          heading="LET’S STAY IN tOUCH!"
        />
        <div className={`container mx-auto`}>
          <div className={Styles.wrapper}>
            <div className={Styles.left}>
              <RectangleBlogCard
                category=""
                title=""
                userType="admin"
                date=""
                noOfComments={2}
                details=""
              />
            </div>

            <div className={Styles.right}>
              <SearchPostForm />
              <RecentPostContainer />
              <CategoriesContainer />
              <TagCloud />
            </div>
          </div>
        </div>
      </LayOut>
    </div>
  );
};

export default PostDetails;
