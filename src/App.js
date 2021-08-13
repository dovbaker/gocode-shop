import React, { useEffect, useState } from "react";

import "./App.css";
import CartContext from "./components/CartContext";
import Header from "./components/Header";
import ProductSection from "./components/Products";
import Cart from "./components/Cart";
import { Button, Drawer, List, ListItem } from "@material-ui/core";
import { createContext } from "react";

const RemoveContext = createContext(null);


let emptyArr = [];

const App = () => {
  const [productListOrigin, SetProductListOrigin] = useState(emptyArr);
  const [productList, SetProductList] = useState(emptyArr);
  const [addedToCart, SetAddedToCart] = useState(emptyArr);

  const onAdd = (e) => {
    
      SetAddedToCart([ ...addedToCart,{e}]);
    
  };

  const onRemove = (e) => {
    if ([...addedToCart,].findIndex({e})!=-1)

      SetAddedToCart([...addedToCart].splice([...addedToCart,].findIndex({ e })));
  };

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
      <CartContext.Provider value={{ addedToCart, onAdd }}>
      <RemoveContext.Provider value={onRemove}>
        <Cart />
        <Header onChoose={(e) => onAdd(e)} categories={categories} />
        <ProductSection productList={productList} />
      </RemoveContext.Provider>
      </CartContext.Provider>
    </div>
  );
};

export default App;
