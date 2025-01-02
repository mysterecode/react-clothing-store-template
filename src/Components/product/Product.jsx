import React from 'react';
import '../../assets/css/product.css';
import default_img from '../Assets/Outerwear.jpg';
import { Link } from 'react-router-dom';

function Product({id, category, image, name, description, price}) {
  return (
    <Link to={`/${category}/product/${id}`} className='Product-link'>
    <div className="product-card">
      <img src={image ? image : default_img} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p className='price'>${price}</p>
    </div>
    </Link>
  );
}

export default Product;
