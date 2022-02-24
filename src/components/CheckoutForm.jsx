import React from "react";

const CheckoutForm = () => {
  return (
    <div className="checkout-form">
      <div className="input-container">
        <h3>Billing Address</h3>
        <h3>Payments</h3>
      </div>
      <div className="input-container">
        <div>
          <label htmlFor="">Full Name</label>
          <br />
          <input type="text" />
        </div>
        <div>
          <p style={{marginLeft: "60px"}}>Accepted Cards</p>
          <div className="icon-container">
            <i className="fa fa-cc-visa mx-1" style={{ color: "navy" }}></i>
            <i className="fa fa-cc-amex mx-1" style={{ color: "blue" }}></i>
            <i
              className="fa fa-cc-mastercard mx-1"
              style={{ color: "red" }}
            ></i>
            <i
              className="fa fa-cc-discover mx-1"
              style={{ color: "orange" }}
            ></i>
          </div>
        </div>
      </div>
      <div className="input-container">
        <div>
          <label htmlFor="">E-mail</label>
          <br />
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Name on Card</label>
          <br />
          <input type="text" />
        </div>
      </div>
      <div className="input-container">
        <div>
          <label htmlFor="">Address</label>
          <br />
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Credit Card Number</label>
          <br />
          <input type="text" />
        </div>
      </div>
      <div className="input-container">
        <div>
          <label htmlFor="">City</label>
          <br />
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Exp Month/Year</label>
          <br />
          <input type="text" />
        </div>
      </div>
      <div className="my-4">
        <input type="checkbox" className="mx-1" />
        <label htmlFor="">Shipping address same as billing</label>
      </div>
      <div className="text-center">
        <button className="btn btn-outline-primary w-100">
          Continue to Checkout
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;
