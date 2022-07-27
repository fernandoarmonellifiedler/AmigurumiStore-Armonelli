import { useContext } from 'react'
import ItemCount from "../ItemCount"
import { Link, useNavigate } from "react-router-dom"
import CartContext from '../../context/CartContext'

export default function ItemDetail({ item }) {
    const { addItem, removeItem, isInCart, countItem } = useContext(CartContext)
    const navigate = useNavigate();

    function handleOnAdd(quantityToAdd) {
        addItem(item, quantityToAdd)
    }

    function handleOnRemove(itemId) {
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

            {isInCart(item.id)
                ? <Link to="/cart">Terminar mi compra ({countItem(item.id)[0].quantity})</Link>
                : <ItemCount initial={item.initial_amount} stock={item.available_stock} onAdd={handleOnAdd} itemId={item.id} />
            }
            {isInCart(item.id) && <button onClick={() => handleOnRemove(item.id)} >Eliminar Producto</button> }

            <button onClick={() => navigate(-1)}>Back to list</button>
        </div>
    )
}
