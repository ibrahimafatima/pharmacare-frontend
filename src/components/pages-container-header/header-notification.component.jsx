import React from "react";
import { MdNotifications } from "react-icons/md";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleNotification } from "./../../redux/header/header.action";
import { selectHeaderNotification } from "../../redux/header/header.selector";

const HeaderNotification = ({ notification_hidden, dispatch }) => {
  return (
    <li
      className={`dropdown ${!notification_hidden && "open"}`}
      onClick={() => dispatch(toggleNotification())}
    >
      <Link data-toggle="dropdown" className="hide-small-device waves-effect ">
        <MdNotifications color="#15BDC3" size="26px" className="bell" />
        <span className="alert-bubble">10</span>
      </Link>
      <div
        role="menu"
        className="dropdown-menu notification-dropdown fadeInUp noty-lists hide-small-device"
      >
        <div className="notification-wrap">
          <h4>You have 10 new notifications</h4>
          <ul>
            <li>
              <Link className="clearfix">
                <span className="ni w-dark-yellow">
                  <i className="fa fa-bookmark-o"></i>
                </span>
                <span className="notification-message">
                  Donec id mi placerat, scelerisque.
                  <span className="notification-time clearfix">
                    3 Months Ago
                  </span>
                </span>
              </Link>
            </li>
          </ul>
          <Link className="btn btn-primary btn-block notification-btn clearfix waves-effect">
            <span>View All</span>
          </Link>
        </div>
      </div>
    </li>
  );
};

const mapStateToProps = createStructuredSelector({
  notification_hidden: selectHeaderNotification,
});

export default connect(mapStateToProps)(HeaderNotification);
