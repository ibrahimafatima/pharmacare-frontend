import React from "react";
import { Link } from "react-router-dom";
import { GiCancel } from "react-icons/gi";
import { connect } from "react-redux";
import { toggleSidebar } from "../../redux/header/header.action";

import logoIconic from "../../assets/logo-iconic.png";

const SidebarTitle = ({ dispatch }) => {
  return (
    <div className="aside-branding">
      <Link className="iconic-logo" to="/">
        <img src={logoIconic} alt="pharmacare Logo" />
      </Link>
      <Link className="large-logo" to="/">
        <span className="large-logo pharmacy-name">Ellen Pharmacy</span>
      </Link>
      <span
        className="aside-pin waves-effect"
        onClick={() => dispatch(toggleSidebar())}
      >
        <i className="fa fa-thumb-tack">
          <GiCancel />
        </i>
      </span>
    </div>
  );
};

export default connect()(SidebarTitle);
