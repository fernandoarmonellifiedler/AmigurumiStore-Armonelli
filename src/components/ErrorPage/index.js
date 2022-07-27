import { Link } from "react-router-dom"

export default function ErrorPage() {
    return (
        <div className='SuccessContainer'>
            <div className="SuccessHeader">
                <h1 className='SuccessTitle'>Página no encontrada</h1>
            </div>
            <br />
            <Link className="CartContainer--backTo" to="/">Back to Home</Link>
        </div>
    )
}
