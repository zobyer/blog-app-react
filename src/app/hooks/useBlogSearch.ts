import { useState } from "react";
import { blogs } from "utils/const/api/blogs";

export function useBlogSearch() {
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  const searchFromBlogs = (keyword: string) => {
    console.log(keyword);

    const filteredBLog = blogs.filter((blog) =>
      blog.title.includes(keyword.toLowerCase())
    );
    setFilteredBlogs(filteredBLog);
  };

  return { filteredBlogs, searchFromBlogs };
}
