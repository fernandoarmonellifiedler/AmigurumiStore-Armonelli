export default function ItemDetail({ item }) {
    return (
        <div id={item.id} className="ItemDetailCard">
            <h1>{item.name}</h1>
            <img src={item.img} alt={item.name} />
            <p>{item.description}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <button>Comprar</button>
        </div>

    )
}
