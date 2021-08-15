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
  const categories = ["all", ...new Set(productListOrigin.map((p) => p.category)),];

  //func
  const onAdd = (e) => {
    SetAddedToCart([...addedToCart, { e }]);
  };

// removePeople(e) {
//   var array = [...this.state.people]; // make a separate copy of the array
//   var index = array.indexOf(e.target.value)
//   if (index !== -1) {
//     array.splice(index, 1);
//     this.setState({people: array});
//   }
// },

  const onRemove = (e) => {
    console.log(e);
  var array = [[...addedToCart]]; // make a separate copy of the array
    // console.log(array);
    // console.log(String(e));
    var index = array.indexOf(e);
        // console.log(index);

    if (index !== -1) {
      SetAddedToCart(
        [...addedToCart].splice(index));
          console.log([...addedToCart]);

    }


    // console.log(e);
    // if ([...addedToCart].map((prod)=>(prod.title)).findIndex(e) !== -1)
    //   SetAddedToCart(
    //     [...addedToCart].splice([...addedToCart].findIndex(e))
    //   );
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

// console.log(productList);

  return (
    <div>
      <CartContext.Provider value={{ addedToCart, onAdd }}>
        <RemoveContext.Provider value={onRemove}>
          <Cart />
          <Header onChoose={ onAdd} categories={categories} />
          <Products productList={productList} />
        </RemoveContext.Provider>
      </CartContext.Provider>
    </div>
  );
};

export default App;
