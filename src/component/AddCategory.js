import axios from "axios";
import React, { useState } from "react";

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const submitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData("name", category);
    formData("photo", selectedFile);

    axios
      .post("http://www.localhost:3000/category", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <h1>Add New Category</h1>
        <form onSubmit={submitHandler}>
          <input
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            type="text"
          />
          <input
            onChange={(e) => {
              setSelectedFile(e.target.files[0]);
            }}
            type="file"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddCategory;
