import './App.css';
import Menu from "./Components/Menu/Menu";
import Lista from "./Components/Lista/Lista"

function App() {
  const skins = ["AK Fire Serpent", "M4 Howl", "Gut Knife Fade"];
  
  return (
    <div>
      <Menu/>
      <Lista products={skins}/>
    </div>
  );
}
export default App;
