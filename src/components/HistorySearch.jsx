import React from "react";
import "./styles/style.css";

const HistorySearch = ({ history }) => {
  return (
    <div className="history-container">
      <h3>History Search</h3>
      {history.slice(0, 10).map((item, index) => (
        <p key={index} className="badge">
          {item.toLowerCase()}
        </p>
      ))}
    </div>
  );
};

export default HistorySearch;
