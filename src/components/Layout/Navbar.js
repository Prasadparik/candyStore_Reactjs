import React, { useContext } from "react";
import "./Navbar.css";
import CartIcon from "../../assets/icons/cart.png";
import CartContext from "../../store/cart-context";

function Navbar({ cartToggle }) {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.length;

  return (
    <div className="Navbar">
      <div className="logo">
        <b>Candy Store</b>
      </div>
      <ul onClick={cartToggle}>
        <li>
          <img src={CartIcon} className="cartIcon" />
        </li>
        <li className="cartItemCount">{numberOfCartItems}</li>
      </ul>
    </div>
  );
}

export default Navbar;
