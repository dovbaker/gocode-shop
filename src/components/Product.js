import React from "react";
import "./Product.css";
const Product = ({ title, price, description, category, image }) => {
  return (
    <div className="product-card">
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
