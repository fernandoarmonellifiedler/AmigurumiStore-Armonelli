import { useState, useEffect, createContext } from 'react';

const CartContext = createContext();

export function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    /* To test: logs cart if cart changes */
    useEffect(() => {
        console.log(cart);
    }, [cart])

    // Add products
    function addItem(item, quantity) {
        if (isInCart(item.id)) {
            setCart(cart.map((cartItem) => {
                if ( cartItem.id === item.id) {
                    return  {...cartItem, quantity}
                } else {
                    return {...cartItem}
                }
            }))
        } else {
            setCart([...cart, { ...item,  quantity}]);
        }
    }

    // Remove one product
    function removeItem(itemId) {
        setCart(cart.filter((cartItem) => {
            return cartItem.id !== itemId
        }))
    }

    // Remove all products
    function clearCart() {
        setCart([])
    }

    //Check if the product is in the cart
    function isInCart(id) {
        return cart.some((cartItem) => {
            return cartItem.id === id
        })
    }

    return (
        <CartContext.Provider
            value={{ cart, addItem, removeItem, clearCart, isInCart }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
