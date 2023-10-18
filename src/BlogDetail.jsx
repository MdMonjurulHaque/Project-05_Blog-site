import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFatch from "./useFetch";

const BlogDetail = () => {
  const history = useNavigate();
  const { id } = useParams();
  const {
    data: blogs,
    isPending,
    error,
  } = useFatch("https://mdmonjurulhaque.github.io/apiTest/blogsite.json" + id);

  const handleDelete = () => {
    fetch("https://mdmonjurulhaque.github.io/apiTest/blogsite.json" + id, {
      method: "DELETE",
    }).then(() => {
      history("/");
    });
  };
  return (
    <div>
      {isPending && <div className=" text-2xl sm:text-3xl text-center pt-5">Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && (
        <div className="p-3 sm:p-5 bg-cyan-50 w-[80%] m-auto mt-5 shadow-lg	 shadow-black-100">
          <article>
            <h1 className="text-2xl sm:text-3xl text-orange-500">
              {blogs.title}
            </h1>
            <p className="sm:text-xl sm:py-5 text-gray-600">{blogs.desc}</p>
            <div className="flex justify-end sm:justify-start">
              <button
                className="bg-sky-500 text-white rounded-xl px-2 py-1 shadow-lg	 shadow-black-100 ease-in-out duration-300 hover:bg-sky-400"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </article>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
