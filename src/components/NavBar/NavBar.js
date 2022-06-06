import NavItem from "../NavItem/NavItem";
import CartWidget from "../CartWidget/CartWidget"

export default function NavBar() {

    function handleClick() {
        console.log("click")
    }

    return (
        <nav className="nav">
            <div className="nav-brand">Tienda Amigurumi</div>
            <ul className="nav-menu">
                <NavItem handleClick={handleClick} text="Productos" />
                <NavItem handleClick={handleClick} text="Quienes Somos" />
                <NavItem handleClick={handleClick} text="Contacto" />
                <CartWidget/>
            </ul>
        </nav>
    );
}
