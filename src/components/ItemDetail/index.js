import { useState, useContext } from 'react'
import ItemCount from "../ItemCount"
import { Link, useNavigate } from "react-router-dom"
import CartContext from '../../context/CartContext'

export default function ItemDetail({ item }) {
    /* Checks if "Comprar" button was clicked */
    const [addedToCart, setAddedToCart] = useState(false)
    const { addItem, removeItem, isInCart } = useContext(CartContext)
    const navigate = useNavigate();

    /* Call methods imported from Context with handlers */
    function handleOnAdd(quantityToAdd) {
        setAddedToCart(true)
        addItem(item, quantityToAdd)
    }

    function handleOnRemove(itemId) {
        setAddedToCart(false)
        removeItem(itemId)
    }

    return (
        <div id={item.id} className="ItemDetailCard">
            <h1>{item.name}</h1>

            <Link to={"/item/" + item.id}>
                <img src={item.img} alt={item.name} />
            </Link>
            <p>$ {item.price}</p>

            <p>{item.description}</p>

            {addedToCart
                ? <Link to="/cart">Terminar mi compra</Link>
                : <ItemCount initial={item.initial_amount} stock={item.available_stock} onAdd={handleOnAdd} itemId={item.id} />
            }
            { isInCart(item.id) &&
            <>
                <button onClick={() => handleOnRemove(item.id)} >Eliminar Producto</button>
            </> }

            <button onClick={() => navigate(-1)}>Back to list</button>

        </div>
    )
}
