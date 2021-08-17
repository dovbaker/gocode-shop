import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Products from "./components/Products";
import RemoveContext from "./components/RemoveContext";
import CartContext from "./components/CartContext";

let emptyArr = [];

const App = () => {
  //setup
  const [productListOrigin, SetProductListOrigin] = useState(emptyArr);
  const [productList, SetProductList] = useState(emptyArr);
  const [addedToCart, SetAddedToCart] = useState(emptyArr);
  //todo: change to genric func annd move out
  const categories = [
    "all",
    ...new Set(productListOrigin.map((p) => p.category)),
  ];

  //func
  const onAdd = (e) => {
    SetAddedToCart([...addedToCart, e]);
  };



  const onRemove = (e) => {

    
    console.log("onRemove", e);
    SetAddedToCart(addedToCart.filter((product) => product.id !== e.id));
    
  };

  const onChoose = (e) => {
    if (e.target.value === "all") SetProductList(productListOrigin);
    else
      SetProductList(
        productListOrigin.filter((prod) => prod.category === e.target.value)
      );
  };


  //server
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        SetProductList(json);
        SetProductListOrigin(json);
      });
  }, []);


  return (
    <div>
      <CartContext.Provider value={{ addedToCart, onAdd }}>
        <RemoveContext.Provider value={onRemove}>
          <Cart />
          <Header onChoose={onChoose} categories={categories} />
          <Products productList={productList} />
        </RemoveContext.Provider>
      </CartContext.Provider>
    </div>
  );
};

export default App;
