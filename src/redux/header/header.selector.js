import { createSelector } from "reselect";

const selectHeader = (state) => state.header;

export const selectHeaderNavigation = createSelector(
  [selectHeader],
  (header) => header.navigation_hidden
);

export const selectHeaderNotification = createSelector(
  [selectHeader],
  (header) => header.notification_hidden
);

export const selectHeaderCart = createSelector(
  [selectHeader],
  (header) => header.cart_hidden
);

export const selectSidebar = createSelector(
  [selectHeader],
  (header) => header.sidebar_hidden
);
