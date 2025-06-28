import React, { useState } from "react";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  // TODO: Replace with real user ID (or get from login state or JWT)
  const author = "665f61eabbf2a07cf7cde919"; // Example author ID

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/homeaddblog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, content, author })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Blog added successfully!");
        setTitle("");
        setContent("");
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("❌ Server error. Try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold text-center mb-4">Add a Blog ✍️</h2>
      {message && (
        <p className="mb-4 text-center text-blue-700 font-medium">{message}</p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border border-gray-300 rounded"
          required
        />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          className="p-2 border border-gray-300 rounded resize-none"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          ➕ Post Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
