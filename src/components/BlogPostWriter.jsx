import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for making HTTP requests

const BlogPostWriter = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your backend API to save the blog post
      const response = await axios.post("YOUR_BACKEND_API_URL", {
        title,
        content,
      });

      console.log("Blog post submitted:", response.data); // Log the response from the server

      // Reset the form fields after successful submission
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error posting blog:", error);
      // Handle errors, such as displaying an error message to the user
    }
  };
  useEffect(() => {
    // Scroll to the bottom of the page after each render
    window.scrollTo(0, document.body.scrollHeight);
  }, [content]); // Scroll when content changes

  return (
    <div className="mx-auto max-w-2xl bg-white rounded-lg shadow-md p-6 relative">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 font-bold mb-2"
          >
            New Post
          </label>
          <div className="flex m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <input
              className="w-full outline border border-gray-300 rounded px-3 py-2 ml-2"
              placeholder="head lines"
              style={{
                borderRadius: "10px",
                padding: "4px",
              }}
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            className="border border-gray-300 rounded px-3 py-2 w-full h-32 resize-none"
            placeholder="Write your blog..!"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Post Blog
        </button>
      </form>
    </div>
  );
};

export default BlogPostWriter;
