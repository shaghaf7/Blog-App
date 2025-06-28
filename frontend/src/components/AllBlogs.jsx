import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/getallblogs")
      .then(res => setBlogs(res.data))
      .catch(err => console.error("Failed to fetch blogs:", err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">📚 All Blogs</h2>
      {blogs.length === 0 ? (
        <p className="text-center text-gray-500">No blogs found.</p>
      ) : (
        <div className="space-y-6">
          {blogs.map((blog, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-blue-700">{blog.title}</h3>
              <p className="text-gray-700 mt-2 whitespace-pre-wrap">{blog.content}</p>
              <p className="text-sm text-gray-500 mt-2">By: {blog.username}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllBlogs;
