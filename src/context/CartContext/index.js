import { useState, useEffect, createContext } from 'react';

const CartContext = createContext();

export function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    /* To test: logs cart if cart changes */
    useEffect(() => {
        countTotal()
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
        setTotalQuantity(0)
        setTotalPrice(0)
    }

    //Check if the product is in the cart
    function isInCart(id) {
        return cart.some((cartItem) => {
            return cartItem.id === id
        })
    }

    function countTotal() {
        let totalItems = 0
        let price = 0
        if (cart.length > 0) {
            cart.map((item) => {
                totalItems += item.quantity
                price += (item.price * item.quantity)
                return item
            })
        }

        setTotalQuantity(totalItems)
        setTotalPrice(price)
    }

    return (
        <CartContext.Provider
            value={{ cart, addItem, removeItem, clearCart, isInCart, countTotal, totalQuantity, totalPrice  }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
