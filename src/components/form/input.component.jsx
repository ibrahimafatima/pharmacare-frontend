import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";

const Input = ({ type, name, onChange, placeholder, label, error }) => {
  return (
    <div className="form-group">
      <label className="col-md-4 control-label">{label}</label>
      <div className=" col-md-4">
        <input
          name={name}
          type={type}
          onChange={onChange}
          className="form-control"
          placeholder={placeholder}
        ></input>
        {error && (
          <p className="input-instruction" style={{ color: "red" }}>
            <FaArrowAltCircleDown color="red" /> {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default Input;
