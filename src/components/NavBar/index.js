import NavItem from "../NavItem";
import CartWidget from "../CartWidget"

export default function NavBar() {

    function handleClick() {
        console.log("click")
    }

    return (
        <nav className="nav">
            <div className="nav-brand">
                <a href="/">Tienda Amigurumi</a>
            </div>
            <ul className="nav-menu">
                <NavItem handleClick={handleClick} text="Productos" />
                <NavItem handleClick={handleClick} text="Quienes Somos" />
                <NavItem handleClick={handleClick} text="Contacto" />
                <CartWidget />
            </ul>
        </nav>
    );
}
