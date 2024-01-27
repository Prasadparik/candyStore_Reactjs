import React, { useContext } from "react";
import "../Meals/FoodItemsList.css";
import CartContext from "../../store/cart-context";

function AddAmountForm({ FoodList, item, i }) {
  const cartCtx = useContext(CartContext);

  const AddItemInCartHandler = (e, newItem, i) => {
    e.preventDefault();
    const updatedFoodList = [...FoodList];

    cartCtx.addItem({
      ...newItem,
      amount: updatedFoodList[i].amount,
    });

    // setFoodList(cartCtx.menu);
  };

  const RemoveItemInCartHandler = (e, newItem, i) => {
    e.preventDefault();
    const updatedFoodList = [...FoodList];

    cartCtx.removeItem({
      ...newItem,
      amount: updatedFoodList[i].amount,
    });

    // setFoodList(cartCtx.menu);
  };
  return (
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

      <button onClick={(e) => AddItemInCartHandler(e, item, i)}>Add</button>
    </form>
  );
}

export default AddAmountForm;
