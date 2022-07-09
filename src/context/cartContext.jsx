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
    return cart.some((prod) => prod.id === id);
  };

  const totalQuantity = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity), 0);
  };

  const totalPrice = () => {
    return cart.reduce(
      (acc, prod) =>
        (acc +=
          prod.price *
          prod.quantity *
          (prod.discount ? (100 - prod.discount)/100 : 1)),
      0
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        totalQuantity,
        totalPrice,
        isInCart,
        removeItem,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
