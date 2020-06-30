import React from "react";

const FormInput = ({
  type,
  name,
  placeholder,
  error,
  onChange,
  icon: Icon,
}) => {
  return (
    <div className="wrap-input100">
      <input
        className="input100"
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
      <span className="focus-input100"></span>
      <span className="symbol-input100">
        <Icon />
      </span>
      {error && (
        <span className="error-message">
          {name !== "passwordAgain" && error}
        </span>
      )}
    </div>
  );
};

export default FormInput;
