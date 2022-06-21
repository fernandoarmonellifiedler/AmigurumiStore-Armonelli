import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail"
import { apiProducts } from "../../data/products"

export default function ItemDetailContainer() {
    const [product, setProduct] = useState({})
    const { id } = useParams();

    useEffect(() => {
        const callProduct = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(apiProducts.find(item => item.id == id))
            }, 2000)
        })

        callProduct
            .then((resolve) => {
                setProduct(resolve)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [id])

    return (
        <ItemDetail item={product} />
    )
}
