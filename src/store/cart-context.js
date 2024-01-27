import { createContext } from "react";

const CartContext = createContext({
  menu: [],
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
