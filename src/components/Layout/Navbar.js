import React from "react";
import "./Navbar.css";
import CartIcon from "../../assets/icons/cart.png";

function Navbar({ cartToggle }) {
  return (
    <div className="Navbar">
      <div className="logo">
        <b>Meals</b>
      </div>
      <ul onClick={cartToggle}>
        <li>
          <img src={CartIcon} className="cartIcon" />
        </li>
        <li className="cartItemCount">3</li>
      </ul>
    </div>
  );
}

export default Navbar;
