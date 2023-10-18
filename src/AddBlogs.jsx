import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBlogs = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, desc, author };
    setIsPending(true);

    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      history("/");
    });
  };

  return (
    <div className="p-5 w-[80%] m-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block mb-2 font-medium text-gray-900 "
          >
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            id="title"
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
            placeholder="Enter your title here"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="desc"
            className="block mb-2 font-medium text-gray-900 "
          >
            Description
          </label>
          <textarea
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            id="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter Description here"
            required
          ></textarea>
        </div>
        <label className=" mb-2 font-medium text-gray-900 ">Blog author:</label>
      
        <select className="bg-gray-200 p-1 rounded-r-xl mx-2 border-2 border-gray-300 " value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option selected value="Monjurul" >Monjurul</option>
          <option value="Jamil"   >Jamil</option>
        </select>
   
        
        {!isPending && (
          <button
            type="submit"
            className=" mt-2 text-white bg-sky-500 px-2 py-1 rounded-lg text-[15px] border-2 border-gray-400 "
          >
            Add Blog
          </button>
        )}
        {isPending && (
          <button
            disabled
            type="submit"
            className="mt-2 text-white bg-sky-500 px-2 py-1 rounded-lg text-[15px] border-2 border-gray-400"
          >
            Adding Blog...
          </button>
        )}
      </form>
    </div>
  );
};

export default AddBlogs;
