import { useContext } from "react"
import { FaShoppingCart } from "react-icons/fa"

import CartContext from "../../context/CartContext"

export default function CartWidget() {
    const { totalQuantity } = useContext(CartContext)

    return (
        <>
            <FaShoppingCart />
            {totalQuantity}
        </>
    )
}
