import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const CartFoodList = [
  {
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    name: "Schnitzel",
    description: "Finest fish and veggies",
    price: 16.99,
  },
  {
    name: "Veg Burger",
    description: "Finest fish and veggies",
    price: 12.49,
  },
].map((item) => (
  <ul className={classes.cartList}>
    <li>
      <b>{item.name}</b> <br />
      <i>{item.description}</i>
    </li>
    <li>
      <b>$ {item.price}</b>
    </li>
  </ul>
));

function Cart({ cartToggle }) {
  return (
    <Modal>
      {CartFoodList}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$ 35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={cartToggle}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
