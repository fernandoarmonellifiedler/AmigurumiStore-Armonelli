import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"

import CartContext from "../../context/CartContext"

export default function CartWidget() {
    const { cart } = useContext(CartContext)

    return (
        <>
            <FaShoppingCart />
            {/* <span>{cart.length}</span> */}
        </>
    )
}
