import Product from "./Product";
import React from "react";
import "./Products.css";


const products = ({ productList }) => {
  console.log(productList);
  return (
    <section className="products">

      {productList.map((prod) => (
       <Product
          key={prod.id}
          id={prod.id}
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

export default products;
