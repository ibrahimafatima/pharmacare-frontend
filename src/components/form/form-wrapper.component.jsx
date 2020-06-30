import React from "react";
import { FaCapsules } from "react-icons/fa";

const FormWrapper = (WrappedForm) => ({ header, note, ...otherProps }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="box-widget widget-module">
          <div className="widget-head clearfix">
            <span className="h-icon">
              <FaCapsules />
            </span>
            <h4>{header}</h4>
          </div>
          <div className="widget-container">
            <div className=" widget-block">
              <div className="page-header">
                <p>{note}</p>
              </div>
              <WrappedForm {...otherProps} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormWrapper;
