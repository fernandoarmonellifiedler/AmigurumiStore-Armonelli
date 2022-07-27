import { useContext } from 'react'
import { Link } from "react-router-dom"
import CartContext from '../../context/CartContext'

export default function CartItem({ item }) {
    const { removeItem } = useContext(CartContext)

    function handleOnRemove(itemId) {
        removeItem(itemId)
    }

    return (
        <div id={item.id} className="CartCard">
            <h1>{item.name}</h1>
            <p>${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <Link to={"/item/" + item.id} >Ver Detalle</Link>
            
            <button onClick={() => handleOnRemove(item.id)} >Eliminar Producto</button>

        </div>
    )
}
