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
  const [productListFilter, SetProductListFilter] = useState(emptyArr);
  const [addedToCart, SetAddedToCart] = useState(emptyArr);

  //fetch data from server
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        SetProductList(json);
        SetProductListOrigin(json);
        SetProductListFilter(json);
      });
  }, []);

  //todo: change to genric func annd move out
  const categories = [
    "all",
    ...new Set(productListOrigin.map((p) => p.category)),
  ];

  //add to cart
  const onAdd = (e) => {
    e = { ...e, qty: 1 };
    if (!addedToCart.find((prod) => prod.title === e.title))
      SetAddedToCart([...addedToCart, e]);
    else {
      e.qty = addedToCart.find((prod) => prod.title === e.title).qty;
      SetAddedToCart([
        ...addedToCart.splice((prod) => prod.title === e.title),
        e,
      ]);
    }
  };

  //remove from cart
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
    SetProductListFilter(
      productListOrigin.filter((prod) => prod.category === e.target.value)
    );
  };

  const priceFilter = (event, value) => {
    SetProductList(
      productListFilter.filter(
        (prod) => prod.price >= value[0] && prod.price <= value[1]
      )
    );
  };

  let min = 0;
  let max = 100;

  if (productListOrigin.length > 0) {
    max = Math.max(...productListOrigin.map((o) => o.price), -100);
    min = Math.min(...productListOrigin.map((o) => o.price), 9999);
  }

  const [priceRange, setPriceRange] = useState({
    min: min,
    max: max,
    value: [10, 100],
  });
  return (
    <div>
      <CartContext.Provider value={{ addedToCart, onAdd }}>
        <RemoveContext.Provider value={onRemove}>
          <Cart />
          <Header
            min={min}
            max={max}
            onChoose={onChoose}
            categories={categories}
            productList={productList}
            priceRange={priceRange}
            setPriceRange={priceFilter}
          />
          <Products productList={productList} />
        </RemoveContext.Provider>
      </CartContext.Provider>
    </div>
  );
};

export default App;
