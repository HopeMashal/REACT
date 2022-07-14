import React from "react";
import Data from "../store";
import {Link} from 'react-router-dom';

const Products=()=>{
  return Data.map(function (product){
    return <button className="ProductBtn">
      <Link to={`/products/${product.id}`}>{product.title}</Link>
    </button>
  })
}

export default Products;