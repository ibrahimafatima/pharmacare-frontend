import React, { Component } from "react";
import Joi from "joi-browser";

import FormInput from "./form-input.component";
import Input from "./input.component";
import Select from "./select.component";

class Form extends Component {
  state = {
    data: {},
    error: {},
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const error = this.validate();
    this.setState({ error: error || {} });
    if (error) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const error = { ...this.state.error };
    const errorMessage = this.validateInput(input);
    if (errorMessage) error[input.name] = errorMessage;
    else delete error[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ error, data });
  };

  validateInput = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    if (!error) return null;
    return error.details[0].message;
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  renderFormInput(type, name, placeholder, icon) {
    const { data, error } = this.state;
    return (
      <FormInput
        icon={icon}
        type={type}
        name={name}
        value={data[name]}
        error={error[name]}
        onChange={this.handleChange}
        placeholder={placeholder}
      />
    );
  }

  renderInput(type, name, placeholder, label) {
    const { data, error } = this.state;
    return (
      <Input
        name={name}
        type={type}
        label={label}
        value={data[name]}
        error={error[name]}
        placeholder={placeholder}
        onChange={this.handleChange}
      />
    );
  }

  renderSelect(name, options, label) {
    const { data, error } = this.state;
    return (
      <Select
        name={name}
        label={label}
        options={options}
        onChange={this.handleChange}
        value={data[name]}
        error={error[name]}
      />
    );
  }

  renderButton(label) {
    return (
      <div className="form-group">
        <label className="col-md-4 control-label">&nbsp;</label>
        <div className="col-md-8">
          <div className="form-actions">
            <br />
            <button
              type="submit"
              className={`btn btn-primary ${this.validate() && "disabled"}`}
            >
              {label}
            </button>
          </div>
        </div>
      </div>
    );
  }

  renderFormButton(label) {
    return (
      <div className="container-login100-form-btn">
        <button
          className={`login100-form-btn ${this.validate() && "btn-disable"}`}
        >
          {label}
        </button>
      </div>
    );
  }
}

export default Form;
