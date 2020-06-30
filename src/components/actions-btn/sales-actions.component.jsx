import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  decreaseCartItem,
  increaseCartItem,
} from "./../../redux/cart/cart.action";

const SalesActions = ({ decreaseCartItem, increaseCartItem, cartItem }) => {
  return (
    <div className="btn-toolbar" role="toolbar">
      <div className="btn-group" role="group">
        <Link
          className="btn btn-default btn-sm m-user-edit"
          onClick={() => increaseCartItem(cartItem)}
        >
          +
        </Link>
        <Link
          className="btn btn-default btn-sm m-user-delete"
          onClick={() => decreaseCartItem(cartItem)}
        >
          -
        </Link>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  decreaseCartItem: (itemToDecrease) =>
    dispatch(decreaseCartItem(itemToDecrease)),
  increaseCartItem: (itemToIncrease) =>
    dispatch(increaseCartItem(itemToIncrease)),
});

export default connect(null, mapDispatchToProps)(SalesActions);
