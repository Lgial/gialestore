import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Lista from "./Components/Lista/Lista";
import ItemCount from './Components/ItemCount/ItemCount';


function App() {
  const skins = ["AK Fire Serpent", "M4 Howl", "Gut Knife Fade"];
  
  return (
    <div>
      <Navbar/>
      <Lista products={skins}/>
      <ItemCount stock={5} initial={1} onAdd={0}/>
      
    </div>
  );
}
export default App;
