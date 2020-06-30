import { sidebarActionType } from "./sidebar.types";

export const expandSidebar = (activeTitle) => ({
  type: sidebarActionType.EXPAND_SIDEBAR,
  payload: activeTitle,
});
