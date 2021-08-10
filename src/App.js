import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import ProductSection from "./components/Products";
import productListOrigin from "./components/ProductList";



const App = () => {
  const [productList, SetProductList] = useState( productListOrigin );

  const onChoose = (e) => {
    if (e.target.value === "all")
      SetProductList(
        productListOrigin)
    else
      SetProductList(
        productListOrigin.filter((prod) => prod.category === e.target.value)
      );
    // console.log(e.target.value);
  };
  return (
    <div>
      <Header onChoose={(e)=>onChoose(e)} />
      <ProductSection productList={productList} />
    </div>
  );
};

export default App;
