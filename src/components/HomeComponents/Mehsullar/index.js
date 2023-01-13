import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import "./style.scss";

function Mehsullar() {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setproduct(data));
  }, []);

  return (
    <>
      {product.map((element) => {
        return (
          <>
            <div class="card">
  <div class="card__img-container">
    <img src= {element.image} alt=""/>
  </div>
  <div class="card__content">
    <h2 class="card__title"> {element.title}</h2>
    <p class="card__description">{element.description}</p>
    <p class="card__price">{element.price}</p>
    <Link to={`/about/${element.id}`} class="card__button">Buy Now</Link>
  </div>
</div>
          </>
        );
      })}
    </>
  );
}

export default Mehsullar;
