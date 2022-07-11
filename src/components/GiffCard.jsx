import React, { useContext, useState } from "react";
import "./styles/style.css";
import { GiphyContext } from "../context/GiphyContext";
import { IoMdStarOutline, IoIosStar, IoIosRemoveCircle } from "react-icons/io";
import { Link } from "wouter";

const GiffCard = ({ obj }) => {
  const { deleteCategory, addFavorite, removeFavorite } =
    useContext(GiphyContext);
  const [star, setStar] = useState(false);

  return (
    <div className="card_item">
      <div className="inner-card">
        <img src={obj.url} alt={`${obj.title} giphy`} />
        <div className="content">
          <div className="menu-icons">
            <span className="icon">
              <Link href="#" onClick={() => setStar(!star)}>
                {star ? <IoIosStar /> : <IoMdStarOutline />}
              </Link>
            </span>
            <span className="icon">
              <Link href="#" onClick={() => deleteCategory(obj.id)}>
                <IoIosRemoveCircle />
              </Link>
            </span>
          </div>
          <p className="title">{obj.title}</p>
        </div>
      </div>
    </div>
  );
};

export default GiffCard;
