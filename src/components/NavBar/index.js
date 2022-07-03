import { useContext } from "react"
import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget"

import CartContext from '../../context/CartContext'

export default function NavBar() {
    const { totalQuantity } = useContext(CartContext)

    return (
        <nav className="nav">
            <div className="nav-brand">
                <NavLink to="/">Tienda Amigurumi</NavLink>
            </div>
            <ul className="nav-menu">
                <NavLink className="nav-item" to="/">All</NavLink>
                <NavLink className="nav-item" to="/category/porks">Porks</NavLink>
                <NavLink className="nav-item" to="/category/crocodiles">Crocodiles</NavLink>
                <NavLink className="nav-item" to="/category/birds">Birds</NavLink>
                <NavLink className="nav-item" to="/category/others">Others</NavLink>
                {totalQuantity > 0 && 
                <NavLink to="/cart" className="CartWidget">
                    <CartWidget />
                </NavLink>
                }
            </ul>
        </nav>
    );
}
