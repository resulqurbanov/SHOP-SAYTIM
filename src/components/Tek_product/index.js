import React, { useEffect, useState } from "react";
import { Link, Route, useNavigate, useParams } from "react-router-dom";





function OnesProduct() {
  
  const navigate = useNavigate();

  

  let { id } = useParams();
  const [product, setproduct] = useState({});
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((response) => response.json())
      .then((data) => setproduct(data));
  }, []);
  return (
    <>
      <div class="card">
        <div class="card__img-container">
          <img src={product.image} alt="" />
        </div>
        <div class="card__content">
          <h2 class="card__title"> {product.title}</h2>
          <p class="card__description">{product.description}</p>
          <p class="card__price">{product.price}</p>
          <Link to={`/about/${id}`} class="card__button">
            Buy Now
          </Link>
         
        </div> 
        <button className="butonum" onClick={()=>{navigate("/")}} >geri</button>
      </div>
    </>
  );
}

export default OnesProduct;
