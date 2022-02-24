import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../redux/cart-slice";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="my-5">
      {cartItems.length === 0 ? (
        <div className="text-center my-5">
          <h3>Your Cart is empty</h3>
        </div>
      ) : (
        cartItems.map((item) => (
          <div className="cart-item mx-5 mb-3" key={item.id}>
            <div className="cart-item__img">
              <img src={item.image} height="120px" width="110px" alt="" />
            </div>
            <h3 className="cart-item__title">{item.title.substr(0, 35)}</h3>
            <div className="cart-item__actions">
              <button
                className="btn btn-outline-primary mx-1"
                onClick={() =>
                  dispatch(cartActions.decrementItem({ id: item.id }))
                }
                disabled={item.quantity === 1}
              >
                -
              </button>
              <span className="fw-bold">x{item.quantity}</span>
              <button
                className="btn btn-outline-primary mx-1"
                onClick={() =>
                  dispatch(cartActions.incrementItem({ id: item.id }))
                }
              >
                +
              </button>
            </div>
            <h5 className="cart-item__price">${(item.price * item.quantity).toFixed(2)}</h5>
            <div className="cart-item__remove">
              <button
                className="btn btn-outline-danger"
                onClick={() =>
                  dispatch(cartActions.removeFromCart({ id: item.id }))
                }
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      <div className="text-center">
        <NavLink to="/checkout" className="btn btn-outline-primary mx-2">
          Proceed to Checkout
        </NavLink>
        <button
          className="btn btn-outline-danger mx-2"
          onClick={() => dispatch(cartActions.clearCart())}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
