import React from "react";
import { connect } from "react-redux";

import { addToCart } from "./../../redux/cart/cart.action";

const AddToCart = ({ medecine, addToCart }) => {
  return (
    <label
      className="label label-primary add-to-cart"
      onClick={() => addToCart(medecine)}
    >
      Add To Cart
    </label>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (medecine) => dispatch(addToCart(medecine)),
});

export default connect(null, mapDispatchToProps)(AddToCart);
