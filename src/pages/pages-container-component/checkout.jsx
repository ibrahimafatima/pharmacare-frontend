import React from "react";

import CheckoutComponent from "./../../components/checkout/checkout.component";

const Checkout = () => {
  return (
    <React.Fragment>
      <h1 className="no-data">
        <u>Current cart details</u>
      </h1>
      <CheckoutComponent />
    </React.Fragment>
  );
};

export default Checkout;
