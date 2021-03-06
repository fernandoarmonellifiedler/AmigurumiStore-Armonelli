import "./App.css"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import CartContainer from "./components/CartContainer"
import SuccessPage from "./components/SuccessPage"
import ErrorPage from "./components/ErrorPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {CartContextProvider} from "./context/CartContext"

function App() {
    return (
        <BrowserRouter>
            <main className="App">
                <CartContextProvider>
                    <header>
                        <NavBar />
                    </header>

                    <section className="main-section">
                        <Routes>
                            <Route path="/" element={<ItemListContainer />} />
                            <Route path="/category/:categoryId" element={<ItemListContainer />} />
                            <Route path="/item/:id" element={<ItemDetailContainer />} />
                            <Route path="/cart" element={<CartContainer />} />
                            <Route path="/success/:id" element={<SuccessPage />} />
                            <Route path="*" element={<ErrorPage />} />
                        </Routes>
                    </section>

                    <footer className="footer">
                        Tienda Amigurumi by Fernando Armonelli Fiedler
                    </footer>
                </CartContextProvider>
            </main>
        </BrowserRouter>
    );
}

export default App;
