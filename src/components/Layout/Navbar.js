import React from "react";
import "./Navbar.css";
import CartIcon from "../../assets/icons/cart.png";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo">
        <b>Meals</b>
      </div>
      <ul>
        <li>
          <img src={CartIcon} className="cartIcon" />
        </li>
        <li className="cartItemCount">0</li>
      </ul>
    </div>
  );
}

export default Navbar;
