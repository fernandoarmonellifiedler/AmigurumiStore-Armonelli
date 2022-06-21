import "./App.css"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import CartContainer from "./components/CartContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <main className="App">
                <header className="App-header">
                    <NavBar />
                </header>

                <section className="main-section">
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/category/:categoryId" element={<ItemListContainer />} />
                        <Route path="/item/:id" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<CartContainer />} />
                    </Routes>
                </section>

                <footer className="footer">
                    Tienda Amigurumi by Fernando Armonelli Fiedler
                </footer>
            </main>
        </BrowserRouter>
    );
}

export default App;
