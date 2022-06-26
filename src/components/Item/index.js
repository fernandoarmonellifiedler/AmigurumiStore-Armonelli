import { Link } from "react-router-dom"
import { useState } from 'react'
import ItemCount from "../ItemCount"

export default function Item({ item }) {
    const [ addedToCart, setAddedToCart ] = useState(false)

    function handleOnAdd(quantityToAdd) {
        setAddedToCart(true)
        console.log(quantityToAdd.target.value)
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
                { addedToCart
                ? <Link to="/cart">Ir a carrito</Link>
                : <ItemCount initial={item.initial_amount} stock={item.available_stock} onAdd={handleOnAdd} />
                }
            </div>
            
        </div>
    )
}
