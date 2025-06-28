import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* App name */}
        <Link to="/" className="text-2xl font-bold hover:text-blue-200">
          BlogSpace
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 text-lg">
          <Link to="/addblog" className="hover:text-blue-300">
            ➕ Add Blog
          </Link>
          <Link to="/allblogs" className="hover:text-blue-300">
            📚 View All Blogs
          </Link>
          <Link to="/logout" className="hover:text-blue-300">
            🚪 Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
