import React, { createContext, useState, useEffect } from 'react';
import data from '../data';

export const CartContext = createContext();

const CartContextProvider = (props) => {

    const [cart, setCart] = useState([]);
    const [exact, setExact] = useState(data);

    const addToCart = (id) => {
        var newCart = [...cart];
        exact.forEach((product, index) => {
            if ( product.id === id && product.incart === false) {
                newCart = [...cart, product];
            }
        })
        setCart(newCart);
    }

    return (
        <CartContext.Provider value={{ 
            cart,
            addToCart,
            exact
             }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
