import { headerActionTypes } from "./header.types";

export const toggleNavigation = () => ({
  type: headerActionTypes.TOGGLE_NAVIGATION,
});

export const toggleNotification = () => ({
  type: headerActionTypes.TOGGLE_NOTIFICATION,
});

export const toggleCart = () => ({
  type: headerActionTypes.TOGGLE_CART,
});

export const toggleSidebar = () => ({
  type: headerActionTypes.TOGGLE_SIDEBAR,
});
