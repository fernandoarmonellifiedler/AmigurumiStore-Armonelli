import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList"
import { PropagateLoader } from "react-spinners"
import { getItems, getItemsByCategory } from "../../services/firestore"

export default function ItemListContainer() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams();

    useEffect(() => {
        if (categoryId) {
            getItemsByCategory(categoryId)
            .then((resolve) => {
                setProducts(resolve)
                setLoading(true)
            })
            .catch((err) => {
                console.error(err)
            })
        } else {
            getItems(categoryId)
            .then((resolve) => {
                setProducts(resolve)
                setLoading(true)
            })
            .catch((err) => {
                console.error(err)
            })
        }
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
