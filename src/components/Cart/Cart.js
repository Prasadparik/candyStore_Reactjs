import React, { useContext, useEffect } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import AddAmountForm from "../UI/AddAmountForm";

function Cart({ cartToggle }) {
  const cartCtx = useContext(CartContext);
  const MealList = cartCtx.items.map((item, i) => (
    <ul className={classes.cartList}>
      <li>
        <b>{item.name}</b> <br />
        <i>{item.description}</i> <br />
        <i> Amt: {item.amount}</i> <br />
      </li>
      <li>
        <AddAmountForm
          FoodList={cartCtx.items}
          setFoodList={cartCtx.menu}
          item={item}
          i={i}
        />
      </li>
    </ul>
  ));

  useEffect(() => {}, [cartToggle]);

  return (
    <Modal>
      {MealList}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$ {cartCtx.totalAmount}</span>
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
