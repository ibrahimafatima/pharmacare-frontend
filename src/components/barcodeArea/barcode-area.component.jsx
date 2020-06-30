import React from "react";
import { connect } from "react-redux";

import { addScannedItemToCart } from "../../redux/cart/cart.action";

const BarcodeArea = ({ addScannedItemToCart }) => {
  return (
    <div className="column">
      <h3>Barcode scanned here</h3>
      {/* <span className="barcode-error">Invalid barcode</span> */}
      <form className="form-horizontal">
        <div className="form-group">
          <div className=" col-md-4">
            <input
              className="form-control"
              type="text"
              autoFocus
              onChange={(e) => {
                if (e.target.value !== "") addScannedItemToCart(e.target.value);
              }}
              placeholder="Barcode area..."
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addScannedItemToCart: (barcode) => dispatch(addScannedItemToCart(barcode)),
});

export default connect(null, mapDispatchToProps)(BarcodeArea);
