import CustomNavbar from "./components/CustomNavbar";
import ItemListContainer from "./components/ItemListContainer";
import {useState} from 'react';

function App() {
  const [itemsCarrito, setItemsCarrito] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <CustomNavbar itemsCarrito = {itemsCarrito}/>
        <ItemListContainer itemsCarrito={itemsCarrito} setItemsCarrito={setItemsCarrito}/>
      </header>
    </div>
  );
}

export default App;
