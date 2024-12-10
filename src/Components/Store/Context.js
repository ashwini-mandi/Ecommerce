import { createContext } from "react";

const Context = createContext({
  items: [],
  addToCart: (item) => {},
});

export default Context;
