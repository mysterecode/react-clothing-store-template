import React, { createContext, useContext, useState } from "react";
import products from "../assets/products";

export const CartContext = createContext();

function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const updateQuantity = (id, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: quantity } : item
            )
        );
    };

    return (
        <CartContext.Provider
            value={{
                allproduct: products,
                cartItems: cart,
                addToCart,
                removeFromCart,
                updateQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;

export const useCart = () => useContext(CartContext);