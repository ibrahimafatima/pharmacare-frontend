import React from "react";
import Joi from "joi-browser";

import Form from "../form/form.component";
import FormWrapper from "../form/form-wrapper.component";
import MEDECINES_TYPE_DATA from "./../medecine-type-table/medecine-type-data";
import MEDECINES_DATA from "./../medecines-table/medecines-data";

class MedecineForm extends Form {
  state = {
    data: {
      name: "",
      generic: "",
      type: "",
      price: 0.0,
      quantity: 0,
      rack: "",
      shelf: "",
      expiry_date: "",
      barcode: "",
    },
    types: MEDECINES_TYPE_DATA,
    error: {},
  };

  schema = {
    name: Joi.string().min(3).max(50).required().label("Medecine name"),
    generic: Joi.string().min(3).max(50).required().label("Generic"),
    type: Joi.string().min(3).max(50).required().label("Type"),
    price: Joi.number().required().label("Price"),
    quantity: Joi.number().required().label("Quantity"),
    rack: Joi.string().min(1).max(50).required().label("Rack"),
    shelf: Joi.string().min(1).max(50).required().label("Shelf"),
    expiry_date: Joi.string().min(1).max(10).required().label("Expiry date"),
    barcode: Joi.string().min(1).max(100).required().label("Barcode"),
  };

  componentDidMount() {
    const { match } = this.props;
    if (match.params.id === "new") return;
    this.setState({ data: MEDECINES_DATA[match.params.id - 1] });
    console.log(MEDECINES_DATA[match.params.id - 1]);
  }

  doSubmit = () => {
    MEDECINES_DATA.push({ ...this.state.data, _id: MEDECINES_DATA.length + 1 });
    console.log(MEDECINES_DATA);
  };

  render() {
    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        {this.renderInput("text", "name", "Medecine name", "Name")}
        {this.renderInput("text", "generic", "Generic", "Generic")}
        {this.renderSelect("type", ["", ...this.state.types], "Type")}
        {this.renderInput("text", "price", "Price", "Price")}
        {this.renderInput("text", "quantity", "Quantity", "Quantity")}
        {this.renderInput("text", "rack", "Rack", "Rack")}
        {this.renderInput("text", "shelf", "Shelf", "Shelf")}
        {this.renderInput("text", "expiry_date", "Expiry date", "Expiry date")}
        {this.renderInput("text", "barcode", "Barcode", "Barcode")}
        {this.renderButton("Add Medecine")}
      </form>
    );
  }
}

export default FormWrapper(MedecineForm);
