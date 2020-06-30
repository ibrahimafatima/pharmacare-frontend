import React from "react";
import Joi from "joi-browser";

import Form from "./../form/form.component";
import MEDECINES_TYPE_DATA from "./../medecine-type-table/medecine-type-data";

class MedecineTypesForm extends Form {
  state = {
    data: {
      type: "",
    },
    error: {},
  };

  schema = {
    type: Joi.string().min(2).max(25).required().label("Medecine type"),
  };

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    if (params.id === "new") return;
    console.log(MEDECINES_TYPE_DATA[params.id]);
  }

  doSubmit = () => {
    console.log("Medecine type Added");
  };

  render() {
    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        {this.renderInput(
          "text",
          "type",
          "Enter medecine type",
          "Medecine type"
        )}
        <hr />
        {this.renderButton("Save Type")}
      </form>
    );
  }
}

export default MedecineTypesForm;
