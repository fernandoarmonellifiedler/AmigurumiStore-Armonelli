import Item from "../Item"

export default function ItemList({items}) {
    return (
        <div className="ItemList">
            { items.map( (item) => {
                return (
                    <>
                        <Item key={item.id} name={item.name} category={item.category} price={item.price} description={item.description} img={item.img} initial_amount={item.initial_amount} available_stock={item.available_stock}/>
                    </>
                    
                )
            }) 
            }
        </div>
        
    )
}
