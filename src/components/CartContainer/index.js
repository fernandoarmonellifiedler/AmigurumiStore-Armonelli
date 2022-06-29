import { useContext } from "react"
import ItemList from "../ItemList"

import CartContext from "../../context/CartContext"

export default function CartContainer() {
  const { cart, clearCart } = useContext(CartContext)

  /* Call methods imported from Context with handlers */
  function handleOnClear() {
    clearCart()
}

  return (
    <div className="CartContainer">
        <h1 className="CartContainerText">{`Tu carrito de compras:`}</h1>
        <button onClick={() => handleOnClear()} >Limpiar Carrito</button>

        <ItemList items={cart} />
    </div>
  )
}
