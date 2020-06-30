import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { createStructuredSelector } from "reselect";

import { toggleSidebar } from "./../../redux/header/header.action";
import { expandSidebar } from "../../redux/sidebar/sidebar.action";
import {
  selectSidebarActive,
  selectSidebarItems,
} from "./../../redux/sidebar/sideabr.selector";

const SidebarNavigator = ({
  sidebar_items,
  active,
  expandSidebar,
  //toggleSidebar,
}) => {
  return (
    <div className="left-navigation">
      <ul className="list-accordion">
        {sidebar_items.map(
          ({ name, label, subItems, icon: Icon, expandable, route }) => (
            <li
              key={name}
              onClick={() => {
                if (active && active[0] === name) {
                  expandSidebar(null);
                  return;
                }
                expandSidebar([name]);
              }}
            >
              <Link
                className={`waves-effect ${
                  active && active[0] === name && "active"
                }`}
                to={route}
              >
                <span className="nav-icon">
                  <Icon />
                </span>
                <span
                  className="nav-label"
                  // onClick={
                  //   Array.isArray(subItems) ? null : () => toggleSidebar()
                  // }
                >
                  {label}
                </span>
                {expandable && active && active[0] === name && (
                  <MdKeyboardArrowDown style={{ marginLeft: "40px" }} />
                )}
                {expandable && active !== name && (
                  <MdKeyboardArrowRight style={{ marginLeft: "40px" }} />
                )}
              </Link>
              {Array.isArray(subItems) ? (
                <ul
                  style={
                    active && active[0] === name ? { display: "block" } : {}
                  }
                >
                  {subItems.map(({ name, label, route }) => (
                    <li key={name}>
                      <Link to={route}>{label}</Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  expandSidebar: (activeTitle) => dispatch(expandSidebar(activeTitle)),
  toggleSidebar: () => dispatch(toggleSidebar()),
});

const mapStateToProps = createStructuredSelector({
  sidebar_items: selectSidebarItems,
  active: selectSidebarActive,
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarNavigator);
