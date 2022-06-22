import { Link } from "react-router-dom"
import ItemCount from "../ItemCount"

export default function Item({ item }) {

    return (
        <div id={item.id} className="ItemCard">
            <h1>{item.name}</h1>
            <Link to={"/item/" + item.id}>
                <img src={item.img} alt={item.name} />
            </Link>
            <p className="ItemCardPrice">${item.price}</p>
            <Link to={"/item/" + item.id} >Ver Detalle</Link>

            <div className="ItemCardShoppingCartBox">
                <ItemCount initial={item.initial_amount} stock={item.available_stock} />
                <Link to="/cart">
                    Comprar
                </Link>
            </div>
            
        </div>
    )
}
