import { useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem"

import CartContext from "../../context/CartContext"

export default function CartContainer() {
    const { cart, clearCart, countTotal, totalQuantity, totalPrice } = useContext(CartContext)

    useEffect(() => {
        countTotal()
    }, [countTotal])

    /* Call methods imported from Context with handlers */
    function handleOnClear() {
        clearCart()
    }

    return (
        <div className="CartContainer">
            { cart.length 
            ?  <>
                <h1 className="CartContainerText">Tu carrito de compras: {totalQuantity} productos</h1>
                <button onClick={() => handleOnClear()} >Limpiar Carrito</button>

                <div className="CartList">
                    {cart.map((item) => {
                        return (
                            <CartItem key={item.id} item={item}  />
                        )
                    })
                    }
                </div>

                <div className="cartTotal">
                    <p>Total: ${totalPrice}</p>
                </div>
            </>
            : <>
                <h1 className="CartContainerText">No tienes items agregados a tu carrito</h1>
            </>
            }

            <Link to="/">Back to Home</Link>
        </div>
    )
}
