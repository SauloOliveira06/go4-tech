import React from "react";
import { useStateValue } from "../../../stateProvider";
import "./Product.css";

export default function Products({
  id,
  title,
  image,
  price,
  description,
  author,
}) {
  const [{ favorite }, dispatch] = useStateValue();

  console.log('favorite content ', favorite);
  const addToFavorite = () => {
    dispatch({
      type: "ADD_TO_FAVORITE",
      item: {
        id: id,
        title: title,
        price: price,
        description: description,
        image: image,
        author: author
      },
    });
  };
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="product-description">{description}</p>
        <p className="product-autor">{author}</p>
      </div>
      <img src={image} alt="" />
      <button onClick={addToFavorite}>Add to favorite</button>
    </div>
  );
}
