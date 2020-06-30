import cartActionTypes from "./cart.types";

export const addToCart = (item) => ({
  type: cartActionTypes.ADD_TO_CART,
  payload: item,
});

export const addScannedItemToCart = (barcode) => ({
  type: cartActionTypes.SCAN_BARCODE,
  payload: barcode,
});

export const decreaseCartItem = (item) => ({
  type: cartActionTypes.DECREASE_ITEM,
  payload: item,
});

export const increaseCartItem = (item) => ({
  type: cartActionTypes.INCREASE_ITEM,
  payload: item,
});

export const clearItem = (item) => ({
  type: cartActionTypes.CLEAR_ITEM,
  payload: item,
});
