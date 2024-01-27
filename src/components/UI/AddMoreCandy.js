import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

function AddMoreCandy() {
  const menuCtx = useContext(CartContext);
  console.log("TEST:", menuCtx.menu);

  const AddCandyHandler = (e) => {
    e.preventDefault();
    let obj = {
      id: 4,
      amount: 0,
      name: "lolipop",
      description: "Finest fish and veggies",
      price: 10,
    };
    menuCtx.addItemToMenu(obj);
  };
  return (
    <form>
      <input type="text" placeholder="candy name" />
      <input type="text" placeholder="description" />
      <input type="number" placeholder="price" />
      <button onClick={AddCandyHandler}>Add New Candy</button>
    </form>
  );
}

export default AddMoreCandy;
