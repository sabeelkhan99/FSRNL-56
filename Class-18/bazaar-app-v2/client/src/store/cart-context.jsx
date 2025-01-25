import React, { createContext, useEffect, useState } from 'react';

const CartContext = createContext({
    cart: [],
    cartLength: 0,
    addToCart: () => { }
});

export const CartContextProvider = (props) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevState) => [...prevState, item]);
    }

    const context = {
        cart: cart,
        cartLength: cart.length,
        addToCart: addToCart
    }

    return <CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>
}

export default CartContext
