import React from "react";
import LayOut from "app/components/layout";
import BlogCard from "app/components/card/blog";

function HomePage() {
  return (
    <>
      <LayOut>
        <BlogCard />
      </LayOut>
    </>
  );
}

export default HomePage;
