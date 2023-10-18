import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs");


  return (
    <div >
      {error && <p>{error}</p>}
      {isPending && <p className="text-2xl sm:text-3xl text-center pt-5">Loading...</p>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
