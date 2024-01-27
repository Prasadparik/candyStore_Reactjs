import { createContext } from "react";

const CartContext = createContext({
  menu: [],
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  addItemToMenu: (item) => {},
});

export default CartContext;
