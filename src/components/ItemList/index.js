import Item from "../Item"

export default function ItemList({ items }) {
    return (
        <div className="ItemList">
            {items.map((item) => {
                return (
                    <>
                        <Item key={item.id} item={item} />
                    </>
                )
            })
            }
        </div>

    )
}
