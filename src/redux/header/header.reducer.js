import { headerActionTypes } from "./header.types";

const INITIAL_STATE = {
  navigation_hidden: true,
  notification_hidden: true,
  sidebar_hidden: true,
  cart_hidden: true,
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case headerActionTypes.TOGGLE_NAVIGATION:
      return {
        ...state,
        navigation_hidden: !state.navigation_hidden,
      };
    case headerActionTypes.TOGGLE_NOTIFICATION:
      return {
        ...state,
        notification_hidden: !state.notification_hidden,
      };
    case headerActionTypes.TOGGLE_CART:
      return {
        ...state,
        cart_hidden: !state.cart_hidden,
      };
    case headerActionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebar_hidden: !state.sidebar_hidden,
      };
    default:
      return state;
  }
};

export default headerReducer;
