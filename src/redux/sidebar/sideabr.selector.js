import { createSelector } from "reselect";

const selectSidebar = (state) => state.sidebar;

export const selectSidebarActive = createSelector(
  selectSidebar,
  (sidebar) => sidebar.active
);

export const selectSidebarItems = createSelector(
  selectSidebar,
  (sidebar) => sidebar.sidebar_items
);
