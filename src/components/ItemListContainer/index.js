import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList"
import { apiProducts } from "../../data/products"

export default function ItemListContainer() {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams();

    useEffect(() => {
        const callProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (categoryId == undefined) {
                    resolve(apiProducts)
                } else {
                    resolve(apiProducts.filter(item => item.category == categoryId))
                }
            }, 2000)
        })

        callProducts
            .then((resolve) => {
                setProducts(resolve)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [categoryId])

    return (
        <ItemList items={products} />
    )
}
