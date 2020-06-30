import React from "react";
import { AiOutlineUser, AiTwotoneLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import Joi from "joi-browser";

import img1 from "../assets/img-01.png";
import Form from "../components/form/form.component";

import "../../src/stylesheets/form-main.styles.css";
import "../../src/stylesheets/form-utils.styles.css";

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    error: {},
  };

  schema = {
    username: Joi.string().min(3).max(15).required().label("Username"),
    password: Joi.string().min(8).max(15).required().label("Password"),
  };

  doSubmit = () => {
    console.log("Hello");
  };

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
              <span className="login100-form-title">Login</span>
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
              {this.renderFormButton("LOGIN")}
              <div className="text-center p-t-12">
                <span className="txt1">Forgot </span>
                <span className="txt2">
                  {" "}
                  {"  "} <Link>Password ?</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
