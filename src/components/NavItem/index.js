export default function NavItem({ handleClick, text }) {

    return (
        <li className="nav-item" onClick={handleClick}>{text}</li>
    )
}
