import React, { useState } from "react";
import "./styles/style.css";

const AddCategory = ({ addCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let delSpaces = inputValue.trim();
    if (delSpaces.length > 0) {
      addCategories(delSpaces);
      e.target.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input-search"
        type="search"
        placeholder="Search category"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
};

export default AddCategory;
