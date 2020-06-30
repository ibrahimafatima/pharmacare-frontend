import React from "react";
import Joi from "joi-browser";
import { AiOutlineUser, AiTwotoneLock } from "react-icons/ai";

import Form from "../components/form/form.component";
import img1 from "../assets/img-01.png";

import "../../src/stylesheets/form-main.styles.css";
import "../../src/stylesheets/form-utils.styles.css";

class Register extends Form {
  state = {
    data: { username: "", password: "", passwordAgain: "" },
    error: {},
  };

  schema = {
    username: Joi.string().min(3).max(15).required().label("Username"),
    password: Joi.string().min(8).max(15).required().label("Password"),
    passwordAgain: Joi.ref("password"),
  };

  doSubmit = () => {};

  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src={img1} alt="IMG" />
            </div>
            <form className="login100-form validate-form">
              <h3 className="title">Pharmacare</h3>
              <span className="login100-form-title">
                Register new Pharmacist
              </span>
              {this.renderFormInput(
                "text",
                "username",
                "Enter username",
                AiOutlineUser
              )}
              {this.renderFormInput(
                "password",
                "password",
                "Enter password",
                AiTwotoneLock
              )}
              {this.renderFormInput(
                "password",
                "passwordAgain",
                "Confirm password",
                AiTwotoneLock
              )}
              {this.renderFormButton("REGISTER")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
