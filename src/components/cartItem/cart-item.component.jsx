import React from "react";
import { GiCancel } from "react-icons/gi";
import { connect } from "react-redux";

import { clearItem } from "./../../redux/cart/cart.action";
import SalesActions from "./../actions-btn/sales-actions.component";

import "./cart-item.styles.scss";

const CartItem = ({ clearItem, cartItem }) => {
  const { name, quantity, price } = cartItem;
  return (
    <div className="cart-item">
      <GiCancel
        color="red"
        size="20px"
        title="remove"
        className="giremove"
        onClick={() => clearItem(cartItem)}
      />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
      <SalesActions cartItem={cartItem} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (itemToClear) => dispatch(clearItem(itemToClear)),
});

export default connect(null, mapDispatchToProps)(CartItem);
