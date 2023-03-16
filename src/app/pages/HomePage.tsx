import React from "react";
import LayOut from "app/components/layout";
import MultiCardCarousel from "app/components/carousel/multi-card";
import { blogs } from "utils/const/api/blogs";
import RedirectLink from "app/components/redirect-link";
import BlogCard from "app/components/card/blog/square";

function HomePage() {
  return (
    <>
      <LayOut>
        <MultiCardCarousel>
          {blogs.map((blog) => (
            <RedirectLink
              key={blog.id}
            
              path={blog.slug}
            >
              
              <BlogCard
            key={blog.id}
            category={blog.category}
            title={blog.title}
            postedBy={blog.postedBy}
            date={blog.date}
            noOfComments={blog.noOfComments}
          /></RedirectLink>
          ))}
        </MultiCardCarousel>
      </LayOut>
    </>
  );
}

export default HomePage;
