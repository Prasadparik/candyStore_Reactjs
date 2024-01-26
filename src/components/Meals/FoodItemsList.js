import React from "react";
import "./FoodItemsList.css";

const FoodList = [
  {
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    name: "Schnitzel",
    description: "Finest fish and veggies",
    price: 16.99,
  },
  {
    name: "Veg Burger",
    description: "Finest fish and veggies",
    price: 12.49,
  },
];
function FoodItemsList() {
  return (
    <>
      <div className="FoodListWrapper">
        <h1>Menu</h1>
        {FoodList.map((item, i) => (
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
          </ul>
        ))}
      </div>
    </>
  );
}

export default FoodItemsList;
