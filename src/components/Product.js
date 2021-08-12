import { Button } from "@material-ui/core";
import { useContext } from "react";

import React from "react";
import "./Product.css";
import CartContext from "./CartContext";
const Product = ({ title, price, description, category, image }) => {
const {addedToCart,SetAddedToCart} = useContext(CartContext);
  return (
    <div className="product-card">
      {/* <button onClick={() => setShowTodos(!showTodos)}>
        {showTodos ? "Remove" : "Add"} Todos
      </button> */}
      {/* todo add to cart  */}

      <Button
        onClick={()=>SetAddedToCart({ title, price, description, category, image })}
        variant="contained"
        color="primary"
      >
        Add
      </Button>
      <div className="product-image">
        <img src={image} alt="Error" />{" "}
      </div>
      <div className="product-info">
        <h5> {title}</h5>
        <h6> {price}$ </h6> {/* <h6> {description} </h6>{" "} */}
        <h6> {category} </h6>
      </div>
    </div>
  );
};
export default Product;
