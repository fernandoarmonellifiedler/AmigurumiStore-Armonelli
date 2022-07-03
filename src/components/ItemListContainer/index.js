import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList"
import { apiProducts } from "../../data/products"
import { PropagateLoader } from "react-spinners"

export default function ItemListContainer() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams();

    useEffect(() => {
        const callProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (categoryId === undefined) {
                    resolve(apiProducts)
                } else {
                    resolve(apiProducts.filter(item => item.category === categoryId))
                }
            }, 600)
        })

        callProducts
            .then((resolve) => {
                setProducts(resolve)
                setLoading(true)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [categoryId])

    return (
        <>
            { 
                loading ? 
                <ItemList items={products} />
                : 
                <div className="loadingBox">
                    <PropagateLoader  className="loadingItem" />
                </div>
            }
        </>
    )
}
