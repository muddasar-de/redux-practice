import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log("items");
  const handleRemoveItem = (id) => {
    console.log("id", id);
    dispatch(remove(id));
  };
  return (
    <div className="cart">
      <h1>CART</h1>
      {cartItems?.map((item, index) => {
        return (
          <div className="cart_item" key={index}>
            <h2>{index}</h2>

            <img src={item.image} className="cart_img" />
            <h2>{item.title}</h2>
            <h2>{item.category}</h2>
            <h2>$ {item.price}</h2>
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
