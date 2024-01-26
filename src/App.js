import Cart from "./components/Cart/Cart";
import Banner from "./components/Layout/Banner";
import Navbar from "./components/Layout/Navbar";
import FoodItemsList from "./components/Meals/FoodItemsList";

function App() {
  return (
    <>
      <Cart />
      <Navbar />
      <Banner />
      <FoodItemsList />
    </>
  );
}

export default App;
