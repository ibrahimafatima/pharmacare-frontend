import React from "react";

import SidebarTitle from "./sidebar-title.component";
import SidebarNavigator from "./sidebar-navigator.component";

const Sidebar = () => {
  return (
    <React.Fragment>
      <SidebarTitle />
      <SidebarNavigator />
    </React.Fragment>
  );
};

export default Sidebar;
