import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <NavBar />
                <h1>Tienda Amigurumi</h1>
            </header>

            <section>
                <ItemListContainer greeting="Aqui van a mostrarse los productos" />
            </section>

            <footer className="footer">
                Primer proyecto - Fernando Armonelli
            </footer>
        </div>
    );
}

export default App;
