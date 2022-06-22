import './App.css';
import { NavBar } from "./components/Navbar/NavBar";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return <>
    <NavBar />
    <ItemListContainer />
    {/* <ItemDetailContainer id={1} /> */}
  </>
}

export default App;
