import React, { useContext } from "react";
import AddCategory from "../components/AddCategory";
import GiffGrid from "../components/GiffGrid";
import { GiphyContext } from "../context/GiphyContext";

const Home = () => {
  const { searchCategory, giphies } = useContext(GiphyContext);

  const handleAddCategory = (value) => {
    searchCategory(value);
  };

  return (
    <>
      <h2>GiffApp</h2>
      <AddCategory addCategories={handleAddCategory} />
      <GiffGrid category={giphies} />
    </>
  );
};

export default Home;
