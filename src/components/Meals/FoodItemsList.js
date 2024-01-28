import React, { useContext } from "react";
import "./FoodItemsList.css";
import CartContext from "../../store/cart-context";
import AddAmountForm from "../UI/AddAmountForm";

function FoodItemsList() {
  const MenuCtx = useContext(CartContext);

  return (
    <>
      <div className="FoodListWrapper">
        <h1>Menu</h1>
        {MenuCtx.menu.map((item, i) => (
          <div className="innerWrapper" key={item.id}>
            <ul>
              <li>
                <b>{item.name}</b>
              </li>
              <li>
                <i>{item.description}</i>
              </li>
              <li>
                <b>$ {item.price}</b>
              </li>
              <li>
                <span>Amount: {item.amount}</span>
              </li>
            </ul>
            <AddAmountForm FoodList={MenuCtx.menu} item={item} i={i} />
          </div>
        ))}
      </div>
    </>
  );
}

export default FoodItemsList;
