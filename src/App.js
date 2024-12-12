import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import ProductCards from "./Components/Card";
import CartProvider from "./Components/Store/ContextProvider";
import Cart from "./Components/Cart";
import Text from "./Components/Generics";
import Home from "./Components/Home";
import About from "./Components/About";
import ContactForm from "./Components/ContactForm";

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
    <Router>
      <CartProvider>
        <NavBar showCartHandler={showCartHandler} />
        <Text />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/store" element={<ProductCards />} /> */}
          <Route path="/store" element={<ProductCards />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        {cartShown && <Cart show={cartShown} onClose={hideCartHandler} />}
      </CartProvider>
    </Router>
  );
}

export default App;
