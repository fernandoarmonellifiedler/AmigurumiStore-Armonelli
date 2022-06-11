import { useState } from 'react'

export default function ItemCount({stock, initial}) {
    const [cantidad, setCantidad] = useState(initial)
    const [alertMessage, setAlertMessage] = useState("")

    function handleSuma () {
        setAlertMessage("");

        if (stock > 0) {
            if (cantidad < stock) {
                setCantidad(cantidad + 1)
            } else {
                setAlertMessage("No puedes agregar más productos")
            }
        } else {
            setAlertMessage("De momento no hay stock para este producto")
        }
    }

    function handleResta () {
        setAlertMessage("");

        if (cantidad > initial) {
            setCantidad(cantidad - 1)
        } else {
            setAlertMessage("Valor minimo alcanzado")
        }
    }

    return (
        <div className='ItemCount'>
            <h2 className='ItemCount-title'>Contador de productos</h2>
            <div className='ItemCount-buttons'>
                <button onClick={handleResta}> - </button>
                <span className='ItemCount-cantidad'>{cantidad}</span>
                <button onClick={handleSuma}> + </button>
            </div>
            <div className='ItemCount-message'>
                <span>{alertMessage}</span>
            </div>
        </div>
    )
}
