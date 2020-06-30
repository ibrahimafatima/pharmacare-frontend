import { combineReducers } from "redux";
import headerReducer from "./header/header.reducer";
import sidebarReducer from "./sidebar/sidebar.reducer";
import dashboardReducer from "./dashboard/dashboard.reducer";
import medecineTableReducer from "./medecines-table/medecines-tables.reducer";
import medecineTypeReducer from "./medecine-type-table/medecine-type.reducer";
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  header: headerReducer,
  sidebar: sidebarReducer,
  dashboard: dashboardReducer,
  medecineType: medecineTypeReducer,
  medecineTable: medecineTableReducer,
});

export default rootReducer;
