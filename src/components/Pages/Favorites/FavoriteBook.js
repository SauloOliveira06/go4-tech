import React from "react";
import "./favoriteBook.css";
import { useStateValue } from "../../../stateProvider";

export default function FavoriteBook({
  id,
  title,
  price,
  description,
  image,
  author,
}) {
  const [{ favorite }, dispatch] = useStateValue();

  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_FAVORITE",
      id: id,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-sm-6 col-md-6">
          <div className="favoriteBook">
            <img className="favoriteBook_image" src={image} alt="" />
            <div className="favoriteBook_info">
              <p className="favoriteBook_title">{title}</p>
              <p className="favoriteBook_price">$ {price}</p>
              <p className="favoriteBook_description">{description}</p>
              <p className="favoriteBook_author">{author}</p>

              <button onClick={removeItem}>Remove favorited book</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
