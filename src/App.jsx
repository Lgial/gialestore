import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Lista from "./Components/Lista/Lista";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';




function App() {
  const skins = ["AK Fire Serpent", "M4 Howl", "Gut Knife Fade"];
  
  return (
    <div>
      <Navbar/>
      <Lista products={skins}/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}
export default App;
