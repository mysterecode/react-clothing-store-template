import React, { useContext } from 'react';
import {CartContext} from "../../Context/CartContext";
import Product from '../product/Product';

function NewArrival() {

  const { allproduct } = useContext(CartContext);

  return (
    <div className="new-arrival">
        <h2>New Arrival</h2>
    <div className="product-list">
      {allproduct["newProducts"].map((p) => (
        <Product
          key={p.id || Math.random().toString(36).substring(2, 15)} 
          category="NewProducts"
          id={p.id}
          image={p.image}
          name={p.name}
          description={p.description}
          price={p.price}
          detail={p.detail}
        />
      ))}
    </div>
    </div>
  );
}

export default NewArrival;

