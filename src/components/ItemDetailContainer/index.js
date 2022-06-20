import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail"
import { apiProducts } from "../../data/products"

export default function ItemDetailContainer() {
    const [product, setProduct] = useState([])
    const max = apiProducts.length - 1;
    const min = 0;
    const randomIndex = Math.floor(Math.random() * (max - min + 1) + 1);

    useEffect(() => {
        const callProduct = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(apiProducts[randomIndex]) // Devuelve un index aleatorio del total de productos
            }, 2000)
        })

        callProduct
            .then((resolve) => {
                setProduct(resolve)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [])

    return (
        <ItemDetail item={product} />
    )
}
