import "./App.css"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

function App() {
    return (
        <main className="App">
            <header className="App-header">
                <NavBar />
            </header>

            <section className="main-section">
                <ItemListContainer/>
            </section>

            <footer className="footer">
                Tienda Amigurumi by Fernando Armonelli Fiedler
            </footer>
        </main>
    );
}

export default App;
