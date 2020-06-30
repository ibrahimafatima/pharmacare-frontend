import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart.selector";
import "./cart.styles.scss";
import CartItem from "./../cartItem/cart-item.component";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-dropdown drp">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem._id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Cart is empty</span>
        )}
      </div>
      <Link to="/dashboard/checkout">
        <button
          className="btn btn-primary"
          style={{ marginTop: "10px", width: "100%" }}
        >
          Checkout
        </button>
      </Link>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(Cart);
