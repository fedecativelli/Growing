import './App.css';
import { NavBar } from "./components/Navbar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"

function App() {
  return <>
    <NavBar />
    <ItemListContainer mensaje="Próximamente" />
  </>;
}

export default App;
