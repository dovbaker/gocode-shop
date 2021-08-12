import React from "react";
import "./Product.css";
import { useContext } from "react";
import Product from "./Product";
import CartContext from "./CartContext";


const Cart = () => {
    
const { addedToCart, SetAddedToCart } = useContext(CartContext);

  
  return (
    <section className="cart">
      {addedToCart.map((prod) => (
        <Product
          key={prod.id}
          title={prod.title}
          price={prod.price}
          description={prod.description}
          category={prod.category}
          image={prod.image}
        />
      ))}
    </section>
  );
};

export default Cart;