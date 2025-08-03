import React from "react";
import { FaBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleBookMark}) => {
  return (
    <div className="mb-20">
      <img
        className="w-full"
        src={blog.cover}
        alt={`cover pic of all ${blog.title}`}
      />
      <div className="flex justify-between">
        <div className="flex mt-10">
          <img
            className="w-[60px] h-[60px] rounded-full"
            src={blog.author_img}
          />
          <div className="ml-6">
            <h1>{blog.author}</h1>
            <p>{blog.posted_data}</p>
          </div>
        </div>
        <div className="m-5 ">
          <span>{blog.reading_time} min read</span>
          <button onClick={() => handleBookMark(blog)} className="tex-2xl text-green-500 ml-2">
            <FaBookmark />
          </button>
        </div>
      </div>
      <h1>Title : {blog.title}</h1>
      <p>
        {blog.hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};

export default Blog;
