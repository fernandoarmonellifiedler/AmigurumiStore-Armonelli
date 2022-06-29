import { useState, useEffect, useContext } from 'react'
import CartContext from '../../context/CartContext'

export default function ItemCount({ stock, initial, onAdd, itemId }) {
    const [cantidad, setCantidad] = useState(initial)
    const [alertMessage, setAlertMessage] = useState("")
    const { cart, isInCart } = useContext(CartContext)

    /* useEffect to update counter if item is already in cart */
    useEffect(() => {
        if (isInCart(itemId)) {
            let itemInCart = cart.find((cartItem) => {
                return cartItem.id === itemId
            })
            /* Updates initial value to actual quantity if cart changes*/
            setCantidad(itemInCart.quantity)
        }
    },[cart])

    function handleSuma() {
        /* State to display a message below */
        setAlertMessage("");

        if (stock > 0) {
            if (cantidad < stock) {
                setCantidad(cantidad + 1)
            } else {
                setAlertMessage("No puedes agregar más productos")
            }
        } else {
            setAlertMessage("De momento no hay stock para este producto")
        }
    }

    function handleResta() {
        setAlertMessage("");

        if (cantidad > initial) {
            setCantidad(cantidad - 1)
        } else {
            setAlertMessage("Valor minimo alcanzado")
        }
    }

    return (
        <div className='ItemCount'>
            <h2 className='ItemCount-title'>Agregar al carrito</h2>
            <div className='ItemCount-buttons'>
                <button onClick={handleResta}> - </button>
                <span className='ItemCount-cantidad'>{cantidad}</span>
                <button onClick={handleSuma}> + </button>
            </div>

            <button onClick={() => onAdd(cantidad)} >Comprar</button>

            <div className='ItemCount-message'>
                <span>{alertMessage}</span>
            </div>
        </div>
    )
}
