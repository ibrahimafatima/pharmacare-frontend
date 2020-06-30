import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCart } from "./../../redux/header/header.action";
import { selectHeaderCart } from "./../../redux/header/header.selector";
import { selectCartItems } from "./../../redux/cart/cart.selector";
import HeaderCartItem from "./header-cart-item/header-cart-item";

const HeaderCart = ({ cart_hidden, dispatch, cartItems }) => {
  const cartSize = cartItems.length;
  return (
    <li
      className={`dropdown ${!cart_hidden && "open"}`}
      onClick={() => dispatch(toggleCart())}
    >
      <Link data-toggle="dropdown" className="hide-small-device waves-effect">
        <MdShoppingCart color="#15BDC3" size="26px" className="bell" />
        <span className="alert-bubble">{cartSize}</span>
      </Link>
      <div
        role="menu"
        className="dropdown-menu message-dropdown msg-lists fadeInUp hide-small-device"
      >
        <div className="message-wrap">
          <h4>
            You have {cartSize} {cartSize > 1 ? "medecines" : "medecine"} in
            cart
          </h4>
          <ul className="clearfix">
            {cartItems.map((cartItem) => (
              <HeaderCartItem key={cartItem._id} cartItem={cartItem} />
            ))}
          </ul>
          <Link
            to="/dashboard/sales"
            className="btn btn-primary btn-block notification-btn clearfix waves-effect"
          >
            Go to sales
          </Link>
        </div>
      </div>
    </li>
  );
};

const mapStateToProps = createStructuredSelector({
  cart_hidden: selectHeaderCart,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(HeaderCart);
