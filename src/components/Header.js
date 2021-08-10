import React from "react";
// import { useState } from "react";
import "./Header.css";
import productList from "./ProductList";

const categories = ["all",...new Set(productList.map((p) => p.category)),];

const Header = ({ onChoose }) => {
  let index = 1;
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select id="category-select" onChange = {(e) => onChoose(e)}>
            {categories.map((cat) => (
              <option key={index++}> {cat}</option>
            ))}
          </select>
        </div>
        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
          </select>
        </div>
      </div>
    </nav>
  );
};



export default Header;
