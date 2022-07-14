import React from "react";
import { Link, useParams } from "react-router-dom";
import Data from "../store";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="product-details">
      <div className=" product-name">
        <h1>{Data[id - 1].title}</h1>
        <hr/>
      </div>
      <div className="product-img">
        <img src={Data[id - 1].imageUrl} alt={Data[id - 1].title} />
      </div>
      <div className=" product-subtitle">
        <b>Size: </b>{Data[id - 1].size}
        <br/>
        <b>Price: </b>{Data[id - 1].price} $
      </div>
      <button className="BackBtn">
        <Link to="/products">Back</Link>
      </button>
    </div>
  );
};

export default ProductDetails;