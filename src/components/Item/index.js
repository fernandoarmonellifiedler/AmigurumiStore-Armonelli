import { useContext } from 'react'
import ItemCount from "../ItemCount"
import { Link } from "react-router-dom"
import CartContext from '../../context/CartContext'

export default function Item({ item }) {
    const { addItem, removeItem, isInCart, countItem } = useContext(CartContext)

    function handleOnAdd(quantityToAdd) {
        addItem(item, quantityToAdd)
    }

    function handleOnRemove(itemId) {
        removeItem(itemId)
    }

    return (
        <div id={item.id} className="ItemCard">
            <h1>{item.name}</h1>
            <Link to={"/item/" + item.id}>
                <img src={item.img} alt={item.name} />
            </Link>
            <p className="ItemCardPrice">${item.price}</p>
            <Link to={"/item/" + item.id} >Ver Detalle</Link>

            <div className="ItemCardShoppingCartBox">
                {isInCart(item.id)
                    ? <Link to="/cart">Terminar mi compra  ({countItem(item.id)[0].quantity})</Link>
                    : <ItemCount initial={item.initial_amount} stock={item.available_stock} onAdd={handleOnAdd} itemId={item.id} />
                }

                { isInCart(item.id) && <button onClick={() => handleOnRemove(item.id)} >Eliminar Producto</button> }
            </div>
        </div>
    )
}
