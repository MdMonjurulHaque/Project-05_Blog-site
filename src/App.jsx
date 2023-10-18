import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import AddBlogs from "./AddBlogs";
import BlogDetail from "./BlogDetail";

const App = () => {
  return (
    <BrowserRouter >
    <div>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addBlog" element={<AddBlogs />} />
        <Route path="/blogDetail/:id" element={<BlogDetail />} />
      </Routes>
    </div>
      
    </BrowserRouter>

  );
};

export default App;
