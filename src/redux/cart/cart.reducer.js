import cartActionTypes from "./cart.types";

import {
  addItemToCart,
  addScannedItemToCart,
  decreaseCartItem,
  increaseCartItem,
} from "./cart.utils";

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartActionTypes.SCAN_BARCODE:
      return {
        ...state,
        cartItems: addScannedItemToCart(state.cartItems, action.payload),
      };
    case cartActionTypes.DECREASE_ITEM:
      return {
        ...state,
        cartItems: decreaseCartItem(state.cartItems, action.payload),
      };
    case cartActionTypes.INCREASE_ITEM:
      return {
        ...state,
        cartItems: increaseCartItem(state.cartItems, action.payload),
      };
    case cartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
