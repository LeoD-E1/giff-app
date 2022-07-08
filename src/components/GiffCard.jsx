import React from "react";
import "./styles/style.css";

const GiffCard = ({ obj }) => {
  const limit = 75;
  return (
    <div className="card_item">
      <div className="inner-card">
        <div className="overlay"></div>
        <img src={obj.images.original.url} alt={`${obj.title} movie`} />
      </div>
    </div>
  );
};

export default GiffCard;
