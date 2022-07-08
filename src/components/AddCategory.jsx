import React, { useState } from "react";

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
        type="text"
        placeholder="Buscar Giff"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
};

export default AddCategory;
