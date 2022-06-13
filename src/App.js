import CustomNavbar from "./components/CustomNavbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contacto from "./components/Contacto";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/cartContext";

function App() {
  const [itemsCarrito, setItemsCarrito] = useState(0);

  return (
    <CartProvider>
      <BrowserRouter>
        <CustomNavbar itemsCarrito={itemsCarrito} />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                itemsCarrito={itemsCarrito}
                setItemsCarrito={setItemsCarrito}
              />
            }
          />
          <Route
            path="/categorias/:categoryId"
            element={
              <ItemListContainer
                itemsCarrito={itemsCarrito}
                setItemsCarrito={setItemsCarrito}
              />
            }
          />
          <Route
            path="/item/:itemId"
            element={
              <ItemDetailContainer
                itemsCarrito={itemsCarrito}
                setItemsCarrito={setItemsCarrito}
              />
            }
          />
          <Route path="*" element={<Navigate to={"/"} />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
