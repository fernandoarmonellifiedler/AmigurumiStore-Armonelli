import ItemCount from "../ItemCount"

export default function Item({ item }) {
    return (
        <a id={item.id} className="ItemCard" href="#">
            <h1>{item.name}</h1>
            <img src={item.img} alt={item.name} />
            <p>{item.description}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <ItemCount initial={item.initial_amount} stock={item.available_stock} />
            <button>Comprar</button>
        </a>
    )
}
