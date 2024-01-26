import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Banner from "./components/Layout/Banner";
import Navbar from "./components/Layout/Navbar";
import FoodItemsList from "./components/Meals/FoodItemsList";

function App() {
  const [cartOpen, setcartOpen] = useState(false);
  const handleCartToggle = () => {
    setcartOpen(!cartOpen);
  };
  return (
    <>
      {cartOpen == true ? <Cart cartToggle={handleCartToggle} /> : <></>}
      <Navbar cartToggle={handleCartToggle} />
      <Banner />
      <FoodItemsList />
    </>
  );
}

export default App;
