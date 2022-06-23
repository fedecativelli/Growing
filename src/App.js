import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/Navbar/NavBar";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" />
        <Route exact path="/Carpas" element={<ItemDetailContainer />} />
      </Routes>
      <ItemListContainer />
      {/* <ItemDetailContainer id={1} /> */}
    </BrowserRouter>
  </>
}

export default App;
