import React, { useContext, useState } from "react";
import "./FoodItemsList.css";
import CartContext from "../../store/cart-context";
import AddAmountForm from "../UI/AddAmountForm";

const List = [
  {
    id: 1,
    amount: 0,
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: 2,
    amount: 0,
    name: "Schnitzel",
    description: "Finest fish and veggies",
    price: 16.99,
  },
  {
    id: 3,
    amount: 0,
    name: "Veg Burger",
    description: "Finest fish and veggies",
    price: 12.49,
  },
];

function FoodItemsList() {
  const MenuCtx = useContext(CartContext);
  const [FoodList, setFoodList] = useState(MenuCtx.menu);

  return (
    <>
      <div className="FoodListWrapper">
        <h1>Menu</h1>
        {FoodList.map((item, i) => (
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
            <AddAmountForm FoodList={FoodList} item={item} i={i} />
          </div>
        ))}
      </div>
    </>
  );
}

export default FoodItemsList;
