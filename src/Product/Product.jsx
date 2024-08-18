import React from "react";
import './Products.css';
import Card from "../Components/Card";
function Product({result}) {
  return (
    <>
      <section className="card-container">
        
    {result}
      </section>
    </>
  );
}

export default Product;
