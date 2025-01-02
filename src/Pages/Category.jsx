import React, { useContext } from "react";
import {CartContext} from "../Context/CartContext";
import Product from "../Components/product/Product";
import '../assets/css/category.css';

function Category(props) {

    const categoryName = props.category.charAt(0).toLowerCase() + props.category.slice(1).replace(/\s+/g, '');

    const pathCategoryName = props.category.charAt(0).toUpperCase() + props.category.slice(1).replace(/\s+/g, '');

    const { allproduct } = useContext(CartContext);

    const totalProducts = allproduct[categoryName]?.length || 0;

    return ( 
    <>
        <div className="result">
            <h2>{props.category}</h2>
            <p>{totalProducts} Result</p>
        </div>
        <div className="product-list">
            {
            allproduct[categoryName].map((product, index) => (
                <Product key={index}
                    id={product.id}
                    category={pathCategoryName}
                    name={product.name} 
                    image={product.image} 
                    price={product.price} 
                    description={product.description} 
                />
                )
            )}
        </div>
    </> 
    );
}

export default Category;