import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import { connect } from "react-redux";

import { toggleSidebar } from "./../../redux/header/header.action";
import HeaderNotification from "./header-notification.component";
import HeaderNavigation from "./header-navigation.component";
import HeaderCart from "./header-cart.component";

const ContainerHeader = ({ toggleSidebar }) => {
  return (
    <header className="top-bar">
      <div className="container-fluid top-nav">
        <div className="row">
          <div className="col-md-2">
            <div className="clearfix top-bar-action">
              <span className="leftbar-action-mobile waves-effect">
                <AiOutlineBars
                  color="#fff"
                  size="20px"
                  className="bar-icon"
                  onClick={() => toggleSidebar()}
                />
              </span>
            </div>
          </div>
          <div className="col-md-4 responsive-fix top-mid">
            <div className="notification-nav">
              <ul className="clearfix">
                <HeaderCart />
                <HeaderNotification />
              </ul>
            </div>
          </div>
          <div className="col-md-6 responsive-fix">
            <HeaderNavigation />
          </div>
        </div>
      </div>
    </header>
  );
};

const mapDisaptchToProps = (dispatch) => ({
  toggleSidebar: () => dispatch(toggleSidebar()),
});

export default connect(null, mapDisaptchToProps)(ContainerHeader);
