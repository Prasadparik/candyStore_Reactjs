import React, { useContext, useEffect } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

function Cart({ cartToggle }) {
  const cartCtx = useContext(CartContext);
  const MealList = cartCtx.items.map((item) => (
    <ul className={classes.cartList}>
      <li>
        <b>{item.name}</b> <br />
        <i>{item.description}</i> <br />
        <i> Amt: {item.amount}</i> <br />
        {item.id}
      </li>
      <li>
        <b>$ {item.price}</b>
      </li>
    </ul>
  ));

  useEffect(() => {}, [cartToggle]);

  return (
    <Modal>
      {MealList}

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
