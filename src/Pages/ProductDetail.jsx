import React, { useState } from "react";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import Product from "../Components/product/Product";
import "../assets/css/Productdetail.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faBoxOpen, faGlobe, faRibbon, faEnvelope, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useCart } from "../Context/CartContext";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

function ProductDetail() {
    const { category, id } = useParams();

    const { addToCart } = useCart();

    const categoryName = category.charAt(0).toLowerCase() + category.slice(1).replace("-", "");

    const { allproduct } = useContext(CartContext);

    const [colorChoice, setColorChoice] = useState();

    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const [size, setSize] = useState("default")

    const product = allproduct[categoryName].find((p) => p.id == id);

    const itemSizes = {
        shirt: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        pant: ['28', '30', '32', '34', '36', '38'],
        shoes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],
        belt: ['S', 'M', 'L', 'XL'],
        cap: ['One Size'],
        sunglasses: ['One Size'],
        jacket: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], 
        short: ['28', '30', '32', '34', '36', '38'], 
        suit: ['36R', '38R', '40R', '42R', '44R', '36L', '38L', '40L', '42L', '44L'], 
        blazer: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], 
        tie: ['One Size'],
        sock: ['One Size', 'S/M', 'L/XL'], 
        coat: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], 
        backpack: ['One Size', 'S', 'M', 'L'], 
    };

    const quantity = [1, 2, 5, 10, 20, 50, 10];

    const filteredProducts = allproduct[categoryName].filter(
        (product) => product.id != id
    );

    const shuffledProducts = filteredProducts
    .sort(() => 0.5 - Math.random()) 
    .slice(0, 4)

    const reviews = [
        {
            id: 1,
            name: "John Doe",
            review:
                "Amazing product! The quality exceeded my expectations and the customer service was top-notch.",
            rating: 5,
        },
        {
            id: 2,
            name: "Jane Smith",
            review:
                "Good value for money. The delivery was quick, and I am very satisfied with my purchase.",
            rating: 4,
        },
        {
            id: 3,
            name: "Mark Lee",
            review:
                "Decent product, but the packaging could be better. Overall, a solid experience.",
            rating: 3,
        },
        {
            id: 4,
            name: "Anna Johnson",
            review:
                "Not satisfied. The product didn’t match the description and the return process was frustrating.",
            rating: 2,
        },
    ];

    
    const handleAddToCart = () => {
        if (!colorChoice) {
            alert("Please select a color.");
            return;
        }
        const cartItem = {
            ...product,
            color: colorChoice,
            size: size,
            quantity: selectedQuantity,
        };
        addToCart(cartItem);
    };

    return (
        <div className="product-page">
            <div className="product-detail-container">
                <div className="product-detail">
                    <img src={product.image} alt={product.name} className="product-detail-image" />
                </div>
                <div className="product-detail product-d-c-2">
                    <div className="detail-container">
                        <h2>{product.name}</h2>
                        <p className="product-detail-price">{product.price} $</p>
                        <div className="rate">
                            <span className="active">★</span>
                            <span className="active">★</span>
                            <span className="active">★</span>
                            <span>★</span>
                            <span>★</span>
                        </div>
                    </div>
                    <p className="product-detail-description">{product.description}</p>
                    <div className="detail-container order-container">
                        <div className="order-information">
                            <h3>Color</h3>
                            <div className="color-container">
                                <span className={`color clr1 ${colorChoice == "green" ? "selected" : null}`} onClick={() => setColorChoice("green")} value="green"></span>
                                <span className={`color clr2 ${colorChoice == "blue" ? "selected" : null}`} onClick={() => setColorChoice("blue")} value="blue"></span>
                                <span className={`color clr3 ${colorChoice == "red" ? "selected" : null}`} onClick={() => setColorChoice("red")} value="red"></span>
                                <span className={`color clr4 ${colorChoice == "white" ? "selected" : null}`} onClick={() => setColorChoice("white")} value="white"></span>
                                <span className={`color clr5 ${colorChoice == "black" ? "selected" : null}`} onClick={() => setColorChoice("black")} value="black"></span>
                            </div>
                        </div>
                        {
                            itemSizes[product.type] ?
                                <div className="order-information">
                                    <h3>Size</h3>
                                    <select name="size" id="size" className="order-select"  onChange={(e) => setSize(e.target.value)}>
                                        {itemSizes[product.type].map((item,index) => <option key={index} value={item}>{item}</option>)}
                                    </select>
                                </div> : null
                        }
                        <div className="order-information">
                            <h3>Quantity</h3>
                            <select name="quantity" id="quantity" className="order-select" onChange={(e) => setSelectedQuantity(Number(e.target.value))}>
                                {quantity.map((a, index) => (<option key={index} value={a}>{a}</option>))}
                            </select>
                        </div>
                    </div>
                    <div className="product-detail-action">
                        <button className="product-detail-addtocart"  onClick={handleAddToCart}>Add to Cart</button>
                        <Link to="/Login" style={{width:'-webkit-fill-available'}}><button className="product-detail-addtowishlist">Add to wishlist</button></Link>
                    </div>
                    <div className="detail-container">
                        <h3>Description</h3>
                        <p className="product-detail-description spacing">{product.details}</p>
                    </div>
                </div>
            </div>
            <div className="product-details-section">
                <div className="detail-item">
                    <h3>Fast Shipping</h3>
                    <p>Enjoy fast and reliable shipping on all orders. Estimated delivery within 3-5 business days.</p>
                    <ul>
                        <li><FontAwesomeIcon icon={faBoxOpen} /> Complimentary shipping on orders over $50.</li>
                        <li><FontAwesomeIcon icon={faTruckFast} /> Standard (3-5 days) and express (1-2 days) options available.</li>
                        <li><FontAwesomeIcon icon={faGlobe} /> International shipping with competitive rates and tracking provided.</li>
                    </ul>
                </div>
                <div className="detail-item">
                    <h3>Gift Options</h3>
                    <p>Looking for a gift? We offer gift wrapping and personalized messages for your special occasions.</p>
                    <ul>
                        <li><FontAwesomeIcon icon={faRibbon} /> Elegant gift wrapping with eco-friendly and festive options.</li>
                        <li><FontAwesomeIcon icon={faEnvelope} /> Custom gift messages included with purchases.</li>
                        <li><FontAwesomeIcon icon={faShoppingBag} /> Available for all products; easy selection at checkout.</li>
                    </ul>
                </div>
                <div className="detail-item">
                    <h3>Hassle-Free Returns</h3>
                    <p>Not satisfied with your purchase? Enjoy hassle-free returns within 30 days.</p>
                </div>
                <div className="detail-item">
                    <h3>Additional Information</h3>
                    <p>All products are quality-tested and come with a 1-year warranty. For bulk purchases, contact support.</p>
                </div>
            </div>
            <div className="review-section">
                <div className="post-review">
                    <div className="review-section-header">
                        <div className="First-block-review">
                            <h2>Reviews</h2>
                            <div className="rating main-rating">
                                <span className="active">★</span>
                                <span className="active">★</span>
                                <span className="active">★</span>
                                <span className="inactive">★</span>
                                <span className="inactive">★</span>
                            </div>
                        </div>
                        <div className="review-action">
                            <Link to="/Login"><button className="post-review-btn">write a review</button></Link>
                        </div>
                    </div>
                    <div className="reviews-container">
                        {reviews.map((review) => (
                            <div className="review-card" key={review.id}>
                                <h3>{review.name}</h3>
                                <p className="review-text">{review.review}</p>
                                <div className="rating">
                                    {Array.from({ length: review.rating }).map((_, index) => (
                                        <span key={`active-${index}`} className="active">★</span>
                                    ))}
                                    {Array.from({ length: 5 - review.rating }).map((_, index) => (
                                        <span key={`inactive-${index}`} className="inactive">☆</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="recommendation">
                <h2>Recommended for You</h2>                
            <div className="product-list">
                {
                    shuffledProducts.map((product, index) => (
                        <Product key={index}
                        id={product.id}
                        category={category}
                        name={product.name} 
                        image={product.image} 
                        price={product.price} 
                        description={product.description} 
                    />
                    )
                )}
            </div>
            </div>
        </div>
    );
}

export default ProductDetail;