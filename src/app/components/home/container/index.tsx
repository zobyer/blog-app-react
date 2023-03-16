import React from "react";

import Styles from "./index.module.scss";
import RectangleBlogCard from "app/components/card/blog/rectangle";
import RecentPostContainer from "../recent-post";
import SearchPostForm from "app/components/form/post-search";
import CategoriesContainer from "../categories";
import MultiCardCarousel from "app/components/carousel/multi-card";
import RedirectLink from "app/components/redirect-link";
import BlogCard from "app/components/card/blog/square";
import { blogs } from "utils/const/api/blogs";
import TagCloud from "../tag-cloud";

const HomePageContainer = () => {
  return (
    <>
      <MultiCardCarousel>
        {blogs.map((blog) => (
          <RedirectLink key={blog.id} path={blog.slug}>
            <BlogCard
              key={blog.id}
              category={blog.category}
              title={blog.title}
              postedBy={blog.postedBy}
              date={blog.date}
              noOfComments={blog.noOfComments}
            />
          </RedirectLink>
        ))}
      </MultiCardCarousel>

      <div className={`mx-auto container ${Styles.wrapper}`}>
        <div className={Styles.leftContainer}>
          <div className={Styles.marginBottom}>
            <RectangleBlogCard />
          </div>
          <div>
            <RectangleBlogCard />
          </div>
        </div>
        <div className={Styles.rightContainer}>
          <SearchPostForm />
          <RecentPostContainer />
          <CategoriesContainer />
          <TagCloud />
        </div>
      </div>
    </>
  );
};

export default HomePageContainer;
