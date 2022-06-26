import { useState } from 'react'
import ItemCount from "../ItemCount"
import { Link } from "react-router-dom"

export default function ItemDetail({ item }) {
    const [ addedToCart, setAddedToCart ] = useState(false)

    function handleOnAdd(quantityToAdd) {
        setAddedToCart(true)
        console.log(quantityToAdd.target.value)
    }

    return (
        <div id={item.id} className="ItemDetailCard">
            <h1>{item.name}</h1>
            <img src={item.img} alt={item.name} />
            <p>{item.description}</p>
            <p>$ {item.price}</p>
            
            { addedToCart
            ? <Link to="/cart">Ir a carrito</Link>
            : <ItemCount initial={item.initial_amount} stock={item.available_stock} onAdd={handleOnAdd} />
            }

        </div>
    )
}
