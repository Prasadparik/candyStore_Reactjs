import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Banner from "./components/Layout/Banner";
import Navbar from "./components/Layout/Navbar";
import FoodItemsList from "./components/Meals/FoodItemsList";
import CartProvider from "./store/CartProvider";
import AddMoreCandy from "./components/UI/AddMoreCandy";

function App() {
  const [cartOpen, setcartOpen] = useState(false);
  const handleCartToggle = () => {
    setcartOpen(!cartOpen);
  };
  return (
    <CartProvider>
      {cartOpen && <Cart cartToggle={handleCartToggle} />}
      <Navbar cartToggle={handleCartToggle} />
      <Banner />
      <AddMoreCandy />
      <FoodItemsList />
    </CartProvider>
  );
}

export default App;
