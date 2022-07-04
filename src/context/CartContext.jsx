import { createContext, useContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const handleAdding = (item) => {
    if (!items.some((book) => book.id === items.id)) {
      setItems([...items, item]);
    }
  };
  return (
    <CartContext.Provider value={{ items, handleAdding }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
