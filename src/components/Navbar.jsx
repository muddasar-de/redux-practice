import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./comp.css";
import { useSelector } from "react-redux";
const Navbar = () => {
  // const { cartItems = 0 } = props;
  // const [cartItems, setCartItems] = useState(0);
  const cartItems = useSelector((state) => state.cart);
  return (
    <div className="nav">
      <h2>Redux Store</h2>
      <div className="nav_menu">
        <div className="nav_item">
          <Link to="/" className="link">
            Home
          </Link>
        </div>
        <div className="nav_item">
          <Link to="/cart" className="link">
            Cart
          </Link>
        </div>
        <div className="nav_item">{`Cart Items: ${cartItems.length}`}</div>
        {/* <Link exact to="/">
          Home
        </Link>
        <Link exact to="/cart">
          Cart
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
