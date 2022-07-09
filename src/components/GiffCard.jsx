import React, { useContext } from "react";
import "./styles/style.css";
import { GiphyContext } from "../context/GiphyContext";

const GiffCard = ({ obj }) => {
  const { deleteCategory } = useContext(GiphyContext);

  return (
    <div className="card_item">
      <div className="inner-card">
        <div className="overlay"></div>
        <img src={obj.url} alt={`${obj.title} giphy`} />
        <div className="content">
          <button
            className="delete-element"
            onClick={() => deleteCategory(obj.id)}
          >
            {" "}
            X{" "}
          </button>
          <p className="title">{obj.title}</p>
        </div>
      </div>
    </div>
  );
};

export default GiffCard;
