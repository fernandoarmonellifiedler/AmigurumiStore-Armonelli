
import { useParams } from "react-router-dom"

export default function SuccessPage() {
    const { id } = useParams();

    return (
        <div className='SuccessContainer'>
            <div className="SuccessHeader">
                <h1 className='SuccessTitle'>Compra Realizada con éxito</h1>
                <p>Id de tu compra: { id } </p>
            </div>
        </div>
    )
}
