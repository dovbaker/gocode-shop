import Product from "./Product";
import React from "react";
import "./Products.css";
import Grid from "@material-ui/core/Grid";

const Products = ({ productList }) => {
  //  let min = 0;
  //  let max = 100;
  //  console.log(productList);
  //  if (productList.length > 0) {
  //    max = Math.max(...productList.map((o) => o.price), 100);
  //    min = Math.min(...productList.map((o) => o.price), 0);
  //    console.log(min, max);
  //  }

  //  const { setPriceRange, priceRange, updateRange, setMinMaxeRange } =
  //    useContext(PriceContext);
  //  setMinMaxeRange([min, max]);

  // console.log(productList);
  return (
    // <section className="products">
    <Grid container spacing={3}>
      {productList.map((prod) => (
        <Grid item xs={3}>
          <Product
            key={prod.id}
            id={prod.id}
            title={prod.title}
            price={prod.price}
            description={prod.description}
            category={prod.category}
            image={prod.image}
          />
        </Grid>
      ))}
    </Grid>
    // </section>
  );
};

export default Products;
