import ItemCount from "../ItemCount"

export default function Item({id, name, category, description, img, price,initial_amount, available_stock}) {
    return (
        <div id={id} className="ItemCard">
            <h1>{name}</h1>
            <img src={img} alt={name} />
            <p>{description}</p>
            <p>{category}</p>
            <p>${price}</p>
            <ItemCount initial={initial_amount} stock={available_stock}/>
            <button>Comprar</button>
        </div>
        
    )
}
