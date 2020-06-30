import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPageName }) => {
  return (
    <div className="page-breadcrumb">
      <div className="row">
        <div className="col-md-7">
          <div className="page-breadcrumb-wrap">
            <div className="page-breadcrumb-info">
              <h2 className="breadcrumb-titles">
                {currentPageName} <small>| Pharmacare</small>
              </h2>
              <ul className="list-page-breadcrumb">
                <li>
                  <Link to="/dashboard">Home</Link>
                </li>
                <li className="active-page"> Ellen Pharmacy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-5"></div>
      </div>
    </div>
  );
};

export default Breadcrumb;
