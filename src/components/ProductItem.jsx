import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/cart-slice";

const ProductItem = (props) => {
  const [showQuantity, setShowQuantity] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const increaseQuantityHandler = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const decreaseQuantityHandler = () => {
    setQuantity((quantity) => quantity - 1);
  };

  const addToCartHandler = () => {
    const cartItem = {
      id: props.id,
      title: props.title,
      image: props.image,
      price: props.price,
      quantity: quantity,
    };
    dispatch(cartActions.addToCart(cartItem));
    setQuantity(1);
    setShowQuantity(false);
  };

  return (
    <div className="card my-3 py-4" style={{ width: "18rem", height: "32rem" }}>
      <img
        src={props.image}
        className="card-img-top product-image"
        alt={props.title}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{props.title.substr(0, 18)}</h5>
        <p className="fw-bold">${props.price}</p>
        {showQuantity ? (
          <>
            <div className="my-1">
              <button
                className="btn btn-outline-primary mx-1"
                onClick={decreaseQuantityHandler}
                disabled={quantity === 1}
              >
                -
              </button>
              <span className="fw-bold">{quantity}</span>
              <button
                className="btn btn-outline-primary mx-1"
                onClick={increaseQuantityHandler}
              >
                +
              </button>
            </div>
            <div>
              <button
                className="btn btn-outline-primary mx-1"
                onClick={addToCartHandler}
              >
                Confirm
              </button>
              <button
                className="btn btn-outline-danger mx-1"
                onClick={() => setShowQuantity(false)}
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <button
            className="btn btn-outline-primary"
            onClick={() => setShowQuantity(true)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
