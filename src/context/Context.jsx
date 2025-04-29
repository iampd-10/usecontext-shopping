import React, { createContext, useContext, useState } from 'react';

// Create the context
export const CartContext = createContext(null);

// Custom hook to use cart context
export const useAddToCart = () => {
    const mycart = useContext(CartContext);
    return mycart;
};

// Context Provider component
export const CartData = ({ children }) => {
    const [items, setItems] = useState([]);

    return (
        <CartContext.Provider value={{ items, setItems }}>
            {children}
        </CartContext.Provider>
    );
};
