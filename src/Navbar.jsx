import React from "react";
import { Link } from "react-router-dom";
import { FaPenNib } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-sky-400 py-3 px-2">
      <div className="flex items-center gap-2  ">
        <div className="text-2xl text-white sm:text-[26px]	">
          <FaPenNib />
        </div>

        <p className="text-xl text-white sm:text-[25px]	">
          <span className="font-bold">My</span> Blog
        </p>
      </div>
      <div className="flex gap-1 text-[12px] text-white }">
        <Link to="/" className="border-2 rounded border-white bg-sky-500 px-2 py-1 sm:text-[15px]">
         Blogs
        </Link>
        <Link to="/addBlog" className="border-2 rounded border-white bg-sky-500 px-2 py-1 sm:text-[15px] ">+ Add Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;
