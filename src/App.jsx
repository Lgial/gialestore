import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Lista from "./Components/Lista/Lista";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


function App() {
  const skins = ["AK Fire Serpent", "M4 Howl", "Gut Knife Fade"];
  
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/categoria/:categoriaID' element={<ItemListContainer/>}/>
      <Route path='/detalle' element={<ItemDetailContainer/>}/>
      </Routes>
      {<Lista products={skins}/>}
      </BrowserRouter>
    </div>
  );
}
export default App;
