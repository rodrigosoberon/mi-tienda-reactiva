import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
      setCart([...cart, item]);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  }

  const totalQuantity = () => {
    return cart.reduce((contador, productos) => (contador += productos.cantidad), 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        totalQuantity,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
