import React from "react";
import LayOut from "app/components/layout";
import BlogCard from "app/components/card/blog";
import MultiCardCarousel from "app/components/carousel/multi-card";
import { blogs } from "utils/const/api/blogs";
import RedirectLink from "app/components/redirect-link";

function HomePage() {
  return (
    <>
      <LayOut>
        <MultiCardCarousel>
          {blogs.map((blog) => (
            <RedirectLink
              key={blog.id}
              name={
                <BlogCard
                  key={blog.id}
                  category={blog.category}
                  title={blog.title}
                  postedBy={blog.postedBy}
                  date={blog.date}
                  noOfComments={blog.noOfComments}
                />
              }
              path={blog.slug}
            />
          ))}
        </MultiCardCarousel>
      </LayOut>
    </>
  );
}

export default HomePage;
