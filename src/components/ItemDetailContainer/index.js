import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import ItemDetail from "../ItemDetail"
import { PropagateLoader } from "react-spinners"
import { getItem } from "../../services/firestore"

export default function ItemDetailContainer() {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        getItem(id)
            .then((resolve) => {
                if (resolve.name) {
                    setProduct(resolve)
                    setLoading(true)
                } else {
                    navigate("/ErrorPage")
                }
            })
            .catch((err) => {
                console.error(err)
            })
    }, [id])

    return (
        <>
            { 
                loading ? 
                <ItemDetail item={product} /> 
                : 
                <div className="loadingBox">
                    <PropagateLoader  className="loadingItem" />
                </div>
            }
        </>
    )
}
