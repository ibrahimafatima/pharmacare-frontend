import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";

const Select = ({ name, label, options, onChange, value, error }) => {
  return (
    <div className="form-group">
      <label className="col-md-4 control-label">{label}</label>
      <div className="col-md-4">
        <select
          className="form-control"
          name={name}
          options={options}
          onChange={onChange}
          value={value}
        >
          {options.map((option) =>
            option[name] ? (
              <option key={option[name]} value={option[name]}>
                {option[name]}
              </option>
            ) : (
              <option key={option} value={option}>
                {option}
              </option>
            )
          )}
        </select>
        {error && (
          <p className="input-instruction" style={{ color: "red" }}>
            <FaArrowAltCircleDown color="red" /> {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default Select;
