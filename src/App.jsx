import { useState } from "react";
import "./App.css";
import Nav from "./Navigation/Nav";
import Product from "./Product/Product";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

// Database
import data from "./db/data";
import Card from "./Components/Card";

function App() {
  const [SelectedCategory, setSelectedCategory] = useState(null);
  //------------- iNPUT FILTER -------------

  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = data.filter(
    (item) =>
      item.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  /*-------------- Radio Filter---------- */
  const handleRadioChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  /*----------- Buttons Filter----------  */

  const handleButtonsClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filterData(products, selected, query) {
    let filteredProducts = products;
  
    // Filtering input items
    if (query) {
      filteredProducts = filteredProducts.filter(
        (item) =>
          item.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
      );
    }
  
    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
  
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()} // Consider using a more stable key if possible, like an id.
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }
  const result = filterData(data, SelectedCategory, query);

  return (
    <>
      <Sidebar handleRadioChange={handleRadioChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleButtonsClick={handleButtonsClick} />
      <Product result={result} />
    </>
  );
}

export default App;
