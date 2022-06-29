import Item from "../Item"
import ItemDetail from "../ItemDetail"

export default function ItemList({ items }) {
    return (
        <div className="ItemList">
            {items.map((item) => {
                return (
                    <ItemDetail key={item.id} item={item} size={"sm"} />
                )
            })
            }
        </div>

    )
}
