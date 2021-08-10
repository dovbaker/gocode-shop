import React, {useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import ProductSection from "./components/Products";
// import productListOrigin from "./components/ProductList";

let emptyArr = [];

const App = () => {
 
   const [productListOrigin, SetProductListOrigin] = useState(emptyArr);
     const [productList, SetProductList] = useState(emptyArr);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        SetProductList(json)
        SetProductListOrigin(json)
        console.log(json);
      });
  }
    ,[]
  );

 const categories = [
   "all",
   ...new Set(productListOrigin.map((p) => p.category)),
 ];



  const onChoose = (e) => {
    if (e.target.value === "all")
      SetProductList(productListOrigin);
    else
      SetProductList(
        productListOrigin.filter((prod) => prod.category === e.target.value)
      );
  };
  return (
    <div>
      <Header onChoose={(e) => onChoose(e)} categories={categories} />
      <ProductSection productList={productList} />
    </div>
  );
};

export default App;
