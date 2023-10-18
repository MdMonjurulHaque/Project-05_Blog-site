import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("https://mdmonjurulhaque.github.io/apiTest/blogsite.json");


  return (
    <div >
      {error && <p>{error}</p>}
      {isPending && <p className="text-2xl sm:text-3xl text-center pt-5">Loading...</p>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
