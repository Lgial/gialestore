import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart/Cart'
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import CartProvider  from './Context/CartContext';


function App() {
  
  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>} /> 
      <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} /> 
      <Route path='/cart' element={<Cart/>} /> 
      <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} /> 
    </Routes>
    </CartProvider>
    </BrowserRouter>
    </>
  );
}
export default App;
