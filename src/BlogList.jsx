import React from "react";
import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";

const BlogList = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => {
        const { id, title, desc, author } = blog;
        
        return (
          <div key={id} className="p-2 bg-cyan-50 sm:m-auto">
            <div  className=" bg-cyan-100 shadow-lg	 shadow-black-100 sm:min-h-[200px] sm:w-[80%] sm:m-auto sm:rounded-lg ">
              <Link to={`/blogDetail/${id}`}>
                <article>
                  <div className="flex gap-2 text-[16px] pl-1 bg-sky-200 rounded-tr-lg sm:text-[25px] sm:rounded-t-lg">
                    <div className="flex items-center ">
                      <ImBlog />
                    </div>
                    <p>{title}</p>
                  </div>

                  <p className="pl-2 text-orange text-[15px] sm:text-[20px] p-2">{desc}</p>
                  <div className=" text-right pr-5 pb-2 sm:mt-10  ">
                  <p className="text-[10px]">WRITTEN BY - {author}</p>
                  </div>
                 
                 
                </article>{" "}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
