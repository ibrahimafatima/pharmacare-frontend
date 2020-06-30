import React from "react";
import Joi from "joi-browser";

import Form from "./../form/form.component";

class FreezeMedecineForm extends Form {
  state = {
    data: {
      name: "",
    },
    error: {},
  };

  schema = {
    name: Joi.string().min(2).max(25).required().label("Medecine name"),
  };

  componentDidMount() {
    //
  }

  doSubmit = () => {
    console.log("Medecine type Added");
  };

  render() {
    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        {this.renderInput(
          "text",
          "name",
          "Enter medecine name",
          "Medecine name"
        )}
        <hr />
        {this.renderButton("Freeze Medecine")}
      </form>
    );
  }
}

export default FreezeMedecineForm;
