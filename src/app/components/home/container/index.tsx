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
import { SearchPost } from "app/components/form/post-search/index.type";
import { useBlogSearch } from "app/hooks/useBlogSearch";

const HomePageContainer = () => {
  const { filteredBlogs, searchFromBlogs } = useBlogSearch();

  const searchBlog = ({ searchKey }: SearchPost) => {
    searchFromBlogs(searchKey);
  };

  return (
    <>
      <MultiCardCarousel>
        {blogs.map((blog) => (
          <RedirectLink key={blog.id} path={`post-details/${blog.slug}`}>
            <BlogCard
              key={blog.id}
              category={blog.category}
              title={blog.title}
              imageUrl={blog.imagePath}
              postedBy={blog.postedBy}
              date={blog.date}
              noOfComments={blog.noOfComments}
            />
          </RedirectLink>
        ))}
      </MultiCardCarousel>

      <div className={`mx-auto container ${Styles.wrapper}`}>
        <div className={Styles.leftContainer}>
          {filteredBlogs.map((blog) => (
            <RedirectLink key={blog.id} path={`post-details/${blog.slug}`}>
              <div className={Styles.marginBottom} key={blog.id}>
                <RectangleBlogCard
                  category={blog.category}
                  title={blog.title}
                  userType="admin"
                  date=""
                  noOfComments={blog.noOfComments}
                  details={blog.description}
                />
              </div>
            </RedirectLink>
          ))}
        </div>
        <div className={Styles.rightContainer}>
          <SearchPostForm onFormSubmit={searchBlog} />
          <RecentPostContainer />
          <CategoriesContainer />
          <TagCloud />
        </div>
      </div>
    </>
  );
};

export default HomePageContainer;
