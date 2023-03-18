import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Banner from "app/components/banner";
import RectangleBlogCard from "app/components/card/blog/rectangle";
import SearchPostForm from "app/components/form/post-search";
import CategoriesContainer from "app/components/home/categories";
import RecentPostContainer from "app/components/home/recent-post";
import TagCloud from "app/components/home/tag-cloud";
import LayOut from "app/components/layout";

import Styles from "styles/PostDetails.module.scss";
import { blogDetails as allBLogDetails } from "utils/const/api/blogs";
import { BlogDetails } from "types/postDetails";

const PostDetails = () => {
  const { postId } = useParams();
  const [blogDetails, setBlogDetails] = useState<BlogDetails>({
    id: "",
    category: "",
    title: "",
    description: "",
    postedBy: "",
    date: "",
    noOfComments: 0,
    slug: "",
  });

  useEffect(() => {
    if (postId) setBlogDetails(allBLogDetails[Number.parseInt(postId)]);
  }, [postId]);

  if (blogDetails.id === "") return <h1>No blog found</h1>;
  else
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
                  category={blogDetails.category}
                  title={blogDetails.title}
                  userType={blogDetails.postedBy}
                  date={blogDetails.date}
                  noOfComments={blogDetails.noOfComments}
                  details={blogDetails.description}
                />
              </div>

              <div className={Styles.right}>
                <SearchPostForm
                  onFormSubmit={() => {
                    console.log("called");
                  }}
                />
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
