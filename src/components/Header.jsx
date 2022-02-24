import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart);
  let totalItemsInCart = 0;
  let totalPriceOfItems = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalItemsInCart += cartItems[i].quantity;
  }
  for (let i = 0; i < cartItems.length; i++) {
    totalPriceOfItems += cartItems[i].price * cartItems[i].quantity;
  }

  return (
    <nav>
      <ul className="nav-bar">
        <li>
          <NavLink className="nav-item" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/cart">
            Cart Items: <span className="fw-bold">{totalItemsInCart}</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/cart">
            Cart Price:{" "}
            <span className="fw-bold">${totalPriceOfItems.toFixed(2)}</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/cart">
            MyCart(<span className="fw-bold">{totalItemsInCart}</span>)
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
