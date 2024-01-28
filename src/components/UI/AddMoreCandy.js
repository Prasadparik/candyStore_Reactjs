import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import "./AddMoreCandy.css";
import Modal from "./Modal";

function AddMoreCandy() {
  const [formToggle, setFormToggle] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: 0,
    amount: 0,
    name: "",
    description: "",
    price: 0,
  });
  const menuCtx = useContext(CartContext);
  console.log("TEST:", menuCtx.menu);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // populating the new Product object with form values
    setNewProduct((prevData) => ({
      ...prevData,
      [name]: value,
      id: Math.floor(Math.random() * 1000000),
    }));
  };

  const AddCandyHandler = (e) => {
    e.preventDefault();
    menuCtx.addItemToMenu(newProduct);
    setFormToggle(!formToggle);
  };
  return (
    <>
      {formToggle ? (
        <Modal>
          <form onSubmit={AddCandyHandler} className="add-candy-form">
            <label htmlFor="name">Candy Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter candy name"
              onChange={handleInputChange}
              required
            />

            <label htmlFor="description">Description:</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Enter description"
              onChange={handleInputChange}
              required
            />

            <label htmlFor="price">Price:</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Enter price"
              onChange={handleInputChange}
              required
            />

            <button type="submit">Add New Candy</button>
            <button
              className="cancelBtn"
              onClick={() => setFormToggle(!formToggle)}
            >
              Cancel
            </button>
          </form>
        </Modal>
      ) : (
        <button onClick={() => setFormToggle(!formToggle)}>Add Candy</button>
      )}
    </>
  );
}

export default AddMoreCandy;
