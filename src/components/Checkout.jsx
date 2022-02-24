import React from "react";
import { useSelector } from "react-redux";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart);

  let totalItemsInCart = 0;
  let totalPriceOfCartItems = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalItemsInCart += cartItems[i].quantity;
  }
  for (let i = 0; i < cartItems.length; i++) {
    totalPriceOfCartItems += cartItems[i].price * cartItems[i].quantity;
  }

  return (
    <div className="checkout-container">
      <CheckoutForm />
      <div className="checkout py-2 px-2">
        <div className="mx-3 my-4">
          <h5>Cart : {totalItemsInCart}</h5>
        </div>
        {cartItems.map((item) => (
          <div className="checkout-item py-1" key={item.id}>
            <h5>{item.title.substr(0, 15)}</h5>
            <h6>x{item.quantity}</h6>
            <h6>${(item.price * item.quantity).toFixed(2)}</h6>
          </div>
        ))}
        <hr />
        <h5 className="text-center">Total: ${totalPriceOfCartItems.toFixed(2)}</h5>
      </div>
    </div>
  );
};

export default Checkout;
