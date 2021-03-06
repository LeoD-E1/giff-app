import React, { useContext } from "react";
import AddCategory from "../components/AddCategory";
import GiffGrid from "../components/GiffGrid";
import HistorySearch from "../components/HistorySearch";
import { GiphyContext } from "../context/GiphyContext";
import "./home.css";

const Home = () => {
  const { searchCategory, giphies, loading, history } =
    useContext(GiphyContext);

  const handleAddCategory = (value) => {
    searchCategory(value);
  };

  return (
    <div className="home-container">
      <h2>GiffApp</h2>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <AddCategory addCategories={handleAddCategory} />
          <HistorySearch history={history} />
          <GiffGrid category={giphies} />
        </>
      )}
    </div>
  );
};

export default Home;
