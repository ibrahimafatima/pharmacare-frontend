import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "./checkout-item.component";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../redux/cart/cart.selector";

import "./checkout.styles.scss";

const CheckoutComponent = ({ cartItems, cartTotal }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Medecine</span>
        </div>
        <div className="header-block">
          <span>Generic</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem._id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${cartTotal}</span>
      </div>
      <button className="btn btn-primary" style={{ marginTop: "10px" }}>
        Pay & Print Receipt
      </button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotalPrice,
});

export default connect(mapStateToProps)(CheckoutComponent);
