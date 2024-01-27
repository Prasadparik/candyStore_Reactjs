import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setitems] = useState([]);
  const [totalAmount, settotalAmount] = useState(0);
  const [menu, setMenu] = useState([
    {
      id: 1,
      amount: 0,
      name: "pizza",
      description: "Finest fish and veggies",
      price: 10,
    },
    {
      id: 2,
      amount: 0,
      name: "butter paneer",
      description: "Finest fish and veggies",
      price: 20,
    },
    {
      id: 3,
      amount: 0,
      name: "Veg Burger",
      description: "Finest fish and veggies",
      price: 5,
    },
  ]);

  const addItemToCartHandler = (newItem) => {
    const updatedItems = [...items];
    const updatedMenu = [...menu];

    const existingItemIndex = updatedItems.findIndex(
      (item) => item.id === newItem.id
    );
    const existingMenuIndex = updatedMenu.findIndex(
      (item) => item.id === newItem.id
    );

    if (existingItemIndex !== -1) {
      // Item exists in the cart
      updatedItems[existingItemIndex].amount += 1;
      settotalAmount(totalAmount + updatedItems[existingItemIndex].price);
    } else {
      // Item doesn't exist in the cart
      updatedItems.push({ ...newItem, amount: 1 });
      settotalAmount(totalAmount + newItem.price);
    }

    updatedMenu[existingMenuIndex].amount += 1;

    setitems(updatedItems);
    setMenu(updatedMenu);

    const updatedTotalAmount = updatedItems.reduce(
      (accum, item) => accum + item.price * item.amount,
      0
    );
    settotalAmount(updatedTotalAmount);
  };

  const removeItemToCartHandler = (newItem) => {
    const updatedItems = [...items];
    const updatedMenu = [...menu];

    const existingItemIndex = updatedItems.findIndex(
      (item) => item.id === newItem.id
    );
    const existingMenuIndex = updatedMenu.findIndex(
      (item) => item.id === newItem.id
    );

    if (existingItemIndex !== -1) {
      // Item exists in the cart
      updatedItems[existingItemIndex].amount -= 1;
      settotalAmount(totalAmount - updatedItems[existingItemIndex].price);
    }

    updatedMenu[existingMenuIndex].amount -= 1;

    const filteredItems = updatedItems.filter((item) => item.amount !== 0);
    console.log("Filter::", filteredItems);

    setitems(filteredItems);
    setMenu(updatedMenu);
  };

  const cartContext = {
    menu: menu,
    items: items,
    totalAmount: totalAmount,
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
