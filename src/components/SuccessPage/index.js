
import { useParams, Link } from "react-router-dom"

export default function SuccessPage() {
    const { id } = useParams();

    return (
        <div className='SuccessContainer'>
            <div className="SuccessHeader">
                <h1 className='SuccessTitle'>Compra Realizada con éxito</h1>
                <p>Id de tu compra: { id } </p>
            </div>
            <br />
            <Link className="CartContainer--backTo" to="/">Back to Home</Link>
        </div>
    )
}
