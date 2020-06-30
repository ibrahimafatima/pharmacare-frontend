import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FaBriefcase, FaUserAlt, FaUnlockAlt } from "react-icons/fa";
import { createStructuredSelector } from "reselect";

import { toggleNavigation } from "../../redux/header/header.action";

import jaman from "../../assets/jaman.jpg";
import { selectHeaderNavigation } from "./../../redux/header/header.selector";

const HeaderNavigation = ({ dispatch, navigation_hidden }) => {
  return (
    <div className="top-aside-right">
      <div className="user-nav" onClick={() => dispatch(toggleNavigation())}>
        <ul>
          <li className={`dropdown ${!navigation_hidden && "open"}`}>
            <Link
              data-toggle="dropdown"
              className="clearfix dropdown-toggle waves-effect waves-block waves-classNameic"
            >
              <span className="user-info">
                Westilian Jaman <cite>Admin</cite>
              </span>
              <span className="user-thumb">
                <img src={jaman} alt="profile"></img>
              </span>
            </Link>
            <ul role="menu" className="dropdown-menu fadeInUp">
              <li>
                <Link>
                  <span className="user-nav-icon">
                    <FaBriefcase />
                  </span>
                  <span className="user-nav-label">My Account</span>
                </Link>
              </li>
              <li>
                <Link>
                  <span className="user-nav-icon">
                    <FaUserAlt />
                  </span>
                  <span className="user-nav-label">View Profile</span>
                </Link>
              </li>
              <li>
                <Link>
                  <span className="user-nav-icon">
                    <FaUnlockAlt />
                  </span>
                  <span className="user-nav-label">Logout</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  navigation_hidden: selectHeaderNavigation,
});

export default connect(mapStateToProps)(HeaderNavigation);
