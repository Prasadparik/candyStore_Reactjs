import React, { useContext, useState } from "react";
import "./FoodItemsList.css";
import CartContext from "../../store/cart-context";

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
  const [FoodList, setFoodList] = useState(List);
  const cartCtx = useContext(CartContext);

  const AddItemInCartHandler = (e, newItem, i) => {
    e.preventDefault();
    const updatedFoodList = [...FoodList];
    updatedFoodList[i].amount += 1;

    cartCtx.addItem({
      ...newItem,
      amount: updatedFoodList[i].amount,
    });

    setFoodList(updatedFoodList);
  };

  const RemoveItemInCartHandler = (e, newItem, i) => {
    e.preventDefault();
    const updatedFoodList = [...FoodList];
    updatedFoodList[i].amount -= 1;

    cartCtx.removeItem({
      ...newItem,
      amount: updatedFoodList[i].amount,
    });

    setFoodList(updatedFoodList);
  };

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
            <form className="amountForm">
              {item.amount > 0 ? (
                <>
                  <button onClick={(e) => RemoveItemInCartHandler(e, item, i)}>
                    -
                  </button>
                  <div className="MealAmountCount">{item.amount}</div>
                </>
              ) : (
                <></>
              )}

              <button onClick={(e) => AddItemInCartHandler(e, item, i)}>
                Add
              </button>
            </form>
          </div>
        ))}
      </div>
    </>
  );
}

export default FoodItemsList;
