import { useState, useEffect } from "react"
import ItemList from "../ItemList"
import { apiProducts } from "../../data/products"

export default function ItemListContainer() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const callProducts = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(apiProducts )
            }, 2000)
        })

        callProducts
        .then((resolve) => {
            setProducts(resolve)
        })
        .catch((error) => {
            console.log(error)
        })

    }, [])

    return (
        <ItemList items={products}/>
    )
}
