import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setitems] = useState([]);

  const addItemToCartHandler = (newItem) => {
    const updatedItems = [...items];

    const existingItemIndex = updatedItems.findIndex(
      (item) => item.id === newItem.id
    );

    if (existingItemIndex !== -1) {
      // Item exists in the cart
      updatedItems[existingItemIndex].amount += 1;
    } else {
      // Item doesn't exist in the cart
      updatedItems.push({ ...newItem, amount: 1 });
    }

    setitems(updatedItems);
  };
  console.log("Items", items);
  const removeItemToCartHandler = (newItem) => {
    const updatedItems = [...items];

    const existingItemIndex = updatedItems.findIndex(
      (item) => item.id === newItem.id
    );

    if (existingItemIndex !== -1) {
      // Item exists in the cart
      updatedItems[existingItemIndex].amount -= 1;
    }

    setitems(updatedItems);
  };

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
