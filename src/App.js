import React, { useEffect, useState } from "react";

import "./App.css";
import CartContext from "./components/CartContext";
import Header from "./components/Header";
import ProductSection from "./components/Products";
import Cart from "./components/Cart";
let emptyArr = [];

const App = () => {
  const [productListOrigin, SetProductListOrigin] = useState(emptyArr);
  const [productList, SetProductList] = useState(emptyArr);
   const [addedToCart, SetAddedToCart] = useState(emptyArr);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        SetProductList(json);
        SetProductListOrigin(json);
      });
  }, []);
//change to genric func annd move out
  const categories = [
    "all",
    ...new Set(productListOrigin.map((p) => p.category)),
  ];

  const onChoose = (e) => {
    if (e.target.value === "all") SetProductList(productListOrigin);
    else
      SetProductList(
        productListOrigin.filter((prod) => prod.category === e.target.value)
      );
   
   
  };

   

  return (
    <div>
      <CartContext.Provider value={{ addedToCart, SetAddedToCart }}>
        <Cart/>
        <Header onChoose={(e) => onChoose(e)} categories={categories} />
        <ProductSection productList={productList} />
      </CartContext.Provider>
    </div>
  );
};

export default App;
