import React from "react";
// import { useState } from "react";
import "./Header.css";
import productList from "./ProductList";

const categories = [...new Set(productList.map((p) => p.category))];

const Header = () => {
  let index = 1;
  // const [selectedCategory, setSelectedCategory] = useState("electronics");
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select
            id="category-select"
            // onChange={() =>
            //   setSelectedCategory(elem.options[elem.selectedIndex].text)
            
          >
            {categories.map((cat) => (
              <option key={index++}> {cat}</option>
            ))}
          </select>
        </div>
        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

// let elem = document.getElementById("category-select");
// elem.onchange = function (selectedCategory="") {

//   let selectedCategory = elem.options[elem.selectedIndex].text;
//   if (selectedCategory === null)
//     selectedCategory = "";

//     };

/* <form method="post" action="{path='locations/index'}" class="drop">
    <select id="drop">
        <option>Select a Location:</option>{exp:channel:entries channel="locations" category="not 3" orderby="title" sort="asc" dynamic="no"}
        <option value="{site_url}index.php/locations/{url_title}">{title}</option>{/exp:channel:entries}
    </select>
</form>
<script>
    document.getElementById("drop").onchange = function() {
        if (this.selectedIndex !== 0) {
            window.location.href = this.value;
        }
    };
</script> */

export default Header;

