import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget"

export default function NavBar() {

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
                <NavLink to="/cart" className="w-24 m-auto">
                    <CartWidget />
                </NavLink>
            </ul>
        </nav>
    );
}
