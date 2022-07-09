import React from "react";
import "./styles/style.css";

const GiffCard = ({ obj }) => {
  return (
    <div className="card_item">
      <div className="inner-card">
        <div className="overlay"></div>
        <img src={obj.url} alt={`${obj.title} giphy`} />
      </div>
    </div>
  );
};

export default GiffCard;
