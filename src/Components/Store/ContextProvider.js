import { useState } from "react";
import Context from "./Context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    setItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const context = {
    items,
    addToCart,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export default CartProvider;
