import { SIDEBAR_DATA } from "./../../components/pages-container-sidebar/sidebar-data";
import { sidebarActionType } from "./sidebar.types";

const INITIAL_STATE = {
  sidebar_items: SIDEBAR_DATA,
  active: null,
};

const sidebarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case sidebarActionType.EXPAND_SIDEBAR:
      return {
        ...state,
        active: action.payload,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
