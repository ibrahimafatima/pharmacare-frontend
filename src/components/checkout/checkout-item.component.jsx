import React from "react";
import { connect } from "react-redux";

import {
  decreaseCartItem,
  increaseCartItem,
  clearItem,
} from "./../../redux/cart/cart.action";

import "./checkout-item.styles.scss";

const CheckoutItem = ({
  cartItem,
  decreaseCartItem,
  increaseCartItem,
  clearItem,
}) => {
  const { name, generic, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <span className="name">{name}</span>
      <span className="quantity">{generic}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseCartItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => increaseCartItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  decreaseCartItem: (itemToDecrease) =>
    dispatch(decreaseCartItem(itemToDecrease)),
  increaseCartItem: (itemToIncrease) =>
    dispatch(increaseCartItem(itemToIncrease)),
  clearItem: (itemToClear) => dispatch(clearItem(itemToClear)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
