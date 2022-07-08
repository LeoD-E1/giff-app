import React from "react";
import "./styles/style.css";
import GiffCard from "./GiffCard";

const GiffGrid = ({ category }) => {
  return (
    <>
      <div>
        {category.length ? (
          <>
            <h2>{category.title}</h2>
            <div className="container-cards">
              {category.map((item, index) => (
                <GiffCard key={index} obj={item} />
              ))}
            </div>
          </>
        ) : (
          <p> There are no giphies to show! </p>
        )}
      </div>
    </>
  );
};

export default GiffGrid;
