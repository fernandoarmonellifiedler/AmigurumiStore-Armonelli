import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail"
import { apiProducts } from "../../data/products"

export default function ItemDetailContainer() {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        const callProduct = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(apiProducts.find(item => item.id === id))
            }, 2000)
        })

        callProduct
            .then((resolve) => {
                setProduct(resolve)
                setLoading(true)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    return (
        <>
        { 
            loading ? 
            <ItemDetail item={product} /> 
            : 
            <div className="loadingBox">
                <h1 className="loadingText">Loading...</h1>
            </div>
        }
        </>
    )
}
