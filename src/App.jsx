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
      <ItemCount/>
      
    </div>
  );
}
export default App;
