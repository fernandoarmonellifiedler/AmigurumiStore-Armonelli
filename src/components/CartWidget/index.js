import { NavLink } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";

export default function CartWidget() {
    return (
        <NavLink  to="/Cart">
            <FaShoppingCart />
        </NavLink>
    )
}
