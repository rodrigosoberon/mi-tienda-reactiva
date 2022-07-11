import CustomNavbar from "./components/CustomNavbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contacto from "./components/Contacto";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { HashRouter, Routes, Route, Navigate} from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <HashRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/categorias/:categoryId"
            element={<ItemListContainer />}
          />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<Navigate to={"/"} />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </HashRouter>
    </CartProvider>
  );
}

export default App;
