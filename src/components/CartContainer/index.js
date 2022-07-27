import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem"
import CartContext from "../../context/CartContext"
import CartForm from "../CartForm"

export default function CartContainer() {
    const [cartModal, setCartModal] = useState(false);
    const { cart, clearCart, countTotal, totalQuantity, totalPrice } = useContext(CartContext)

    useEffect(() => {
        countTotal()
    }, [countTotal])

    function handleOnClear() {
        clearCart()
    }

    function handleOpenCloseForm() {
        if (cartModal) {
            setCartModal(false)
        } else {
            setCartModal(true)
        }
    }

    return (
        <div className="CartContainer">
            {cart.length
                ? <>
                    <div className="CartContainerTitle">
                        <h1 className="CartContainerText">Tu carrito de compras: {totalQuantity} productos</h1>
                        <button onClick={() => handleOnClear()} >Limpiar Carrito</button>
                    </div>


                    <div className="CartList">
                        {cart.map((item) => {
                            return (
                                <CartItem key={item.id} item={item} />
                            )
                        })}
                    </div>

                    <div className="cartTotal">
                        <p>Total: ${totalPrice}</p>
                    </div>

                    <button className="CartContainer--button" onClick={handleOpenCloseForm}>
                        Finalizar compra
                    </button>

                    {cartModal && <CartForm handleOpenCloseForm={handleOpenCloseForm} />}
                </>
                : <h1 className="CartContainerText">No tienes items agregados a tu carrito</h1>
            }
            <br />
            <Link className="CartContainer--backTo" to="/">Back to Home</Link>
        </div>
    )
}
