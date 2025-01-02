import React, { useContext } from "react";
import { Link } from 'react-router-dom'; 
import { CartContext } from "../Context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowLeft, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import "../assets/css/cart.css";

function Cart() {
    const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

    const handleQuantityChange = (id, quantity) => {
        if (quantity > 0) {
            updateQuantity(id, quantity);
        }
    };

    console.log(cartItems);

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>
            <div className="cart-container">
                {cartItems.length > 0 ? (
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p>
                                        Color: 
                                        <span 
                                            className="color-box" 
                                            style={{ backgroundColor: item.color }}
                                        ></span>
                                    </p>
                                    <p>Size: {item.size}</p>
                                    <p>Price: ${item.price}</p>
                                    <div className="quantity-control">
                                        <button 
                                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button 
                                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button 
                                    className="remove-item" 
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="empty-cart">Your cart is empty.</p>
                )}
            </div>

            {cartItems.length > 0 && (
                <div className="cart-summary">
                    <h2>Order Summary</h2>
                    <p>Total Items: {cartItems.length}</p>
                    <p>Total Price: ${totalPrice.toFixed(2)}</p>
                    <button className="checkout-button" onClick={() => {alert("No payment method available")}}>
                        <FontAwesomeIcon icon={faCreditCard} /> Proceed to Checkout
                    </button>
                    <Link to="/">
                    <button className="continue-shopping">
                        <FontAwesomeIcon icon={faArrowLeft} /> Continue Shopping
                    </button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Cart;