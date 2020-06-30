import { toast } from "react-toastify";

import MEDECINES_DATA from "./../../components/medecines-table/medecines-data";

export const addItemToCart = (cartItems, itemToAdd) => {
  const itemExist = cartItems.find(
    (medecine) => medecine._id === itemToAdd._id
  );
  if (itemExist) {
    return cartItems.map((cartItem) =>
      cartItem._id === itemToAdd._id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const addScannedItemToCart = (cartItems, barcode) => {
  const itemScanned = MEDECINES_DATA.find(
    (medecine) => medecine.barcode === barcode
  );

  if (itemScanned) {
    const itemExist = cartItems.find(
      (medecine) => medecine._id === itemScanned._id
    );
    if (itemExist) {
      toast.success(itemScanned.name + " is increased");
      return cartItems.map((cartItem) =>
        cartItem._id === itemScanned._id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    toast.success(itemScanned.name + " is added");
    return [...cartItems, { ...itemScanned, quantity: 1 }];
  }
  toast.error("No such product found");
  return [...cartItems];
};

export const decreaseCartItem = (cartItems, itemToDecrease) => {
  const itemExist = cartItems.find((item) => item._id === itemToDecrease._id);
  if (itemExist.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem._id !== itemToDecrease._id);
  }
  return cartItems.map((cartItem) =>
    cartItem._id === itemToDecrease._id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const increaseCartItem = (cartItems, itemToIncrease) => {
  return cartItems.map((cartItem) =>
    cartItem._id === itemToIncrease._id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};
