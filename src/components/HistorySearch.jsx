import React, { useContext } from "react";
import "./styles/style.css";
import { GiphyContext } from "../context/GiphyContext";

const HistorySearch = ({ history }) => {
  const { searchCategory } = useContext(GiphyContext);

  const handleClick = (e) => {
    searchCategory(e.target.value);
  };

  return (
    <div className="history-container">
      <h3>History Search</h3>
      {history.slice(0, 10).map((item, index) => (
        <button
          key={index}
          className="badge"
          value={item}
          onClick={handleClick}
        >
          {item.toLowerCase()}
        </button>
      ))}
    </div>
  );
};

export default HistorySearch;
