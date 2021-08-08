import Product from "./Product";
import React from "react";
import "./ProductSection.css";
import productList from "./ProductList";
// import selectedCategory from "./Header";

const ProductSection = () => {
  return (
    <section className="products">
      {productList
        //  .filter((prod) => prod.category === {selectedCategory})
        .map((prod) => (
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
