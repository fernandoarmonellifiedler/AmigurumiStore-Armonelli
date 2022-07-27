import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { createOrder } from "../../services/firestore"
import CartContext from "../../context/CartContext"

export default function CartForm({handleOpenCloseForm}) {
    const [alertMessage, setAlertMessage] = useState("")
    const { cart, clearCart, totalPrice } = useContext(CartContext)
    const [buyerData, setBuyerData] = useState({
        name: "",
        phone: "",
        email: ""
    })
    const navigate = useNavigate();

    function handleChange(e) {
        setBuyerData({
            ...buyerData,
            [e.target.name]: e.target.value
        })
    }

    function handleFinishOrder(e) {
        e.preventDefault()
        if (buyerData.name && buyerData.phone && buyerData.email) {
            const dataOrder = {
                buyer: {
                    name: buyerData.name,
                    phone: buyerData.phone,
                    email: buyerData.email
                },
                items: cart,
                total: totalPrice
            }
            
            createOrder(dataOrder)
            .then((res) => {
                clearCart()
                navigate("/success/" + res.id)
            })
        } else {
            setAlertMessage("Todos los datos son obligatorios!")
        }
        
    }

    return (
        <div className='CartFormContainer'>
            <div className="CartFormHeader">
                <h1 className='CartFormTitle'>Ingresa tus datos para finalizar tu compra</h1>
                <button className="CartFormClose" onClick={handleOpenCloseForm}>X</button>
            </div>
            
            <form className='CartForm'>
                <label htmlFor="name">Nombre completo</label>
                <input className='CartFormInput' name="name" value={buyerData.name} onChange={handleChange}/>
                <label htmlFor="phone">Teléfono</label>
                <input className='CartFormInput' name="phone" value={buyerData.phone} onChange={handleChange}/>
                <label htmlFor="email">Email</label>
                <input className='CartFormInput' name="email" value={buyerData.email} onChange={handleChange}/>

                <div className='ItemCount-message'>
                    <span>{alertMessage}</span>
                </div>

                <button className="CartFormButton" onClick={handleFinishOrder}>Enviar</button>
            </form>
        </div>
    )
}
