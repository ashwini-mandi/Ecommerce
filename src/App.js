import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import ProductCards from "./Components/Card";
import CartProvider from "./Components/Store/ContextProvider";
import Cart from "./Components/Cart";
import Text from "./Components/Generics";

function App() {
  const [cartShown, setCartShown] = useState(false);
  const showCartHandler = () => {
    console.log("clicked");
    setCartShown(true);
  };

  const hideCartHandler = () => {
    setCartShown(false);
  };
  return (
    <>
      <CartProvider>
        <NavBar showCartHandler={showCartHandler} />
        <Text />
        <ProductCards />
        {cartShown && <Cart show={cartShown} onClose={hideCartHandler} />}
      </CartProvider>
    </>
  );
}

export default App;
