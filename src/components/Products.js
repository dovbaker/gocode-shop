import Product from "./Product";
import React from "react";
import "./Products.css";
// import productList from "./ProductList";
// import selectedCategory from "./Header";

const ProductSection = ({ productList }) => {
  return (
    <section className="products">
      { productList.map((prod) => (
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

export default ProductSection;