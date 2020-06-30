import React from "react";

import Breadcrumb from "../../components/breadcrumb/breadcrumb.component";
import MedecinesTable from "./../../components/medecines-table/medecines-table.component";
import Cart from "./../../components/cart/cart.component";
import BarcodeArea from "../../components/barcodeArea/barcode-area.component";

const Sales = () => {
  return (
    <React.Fragment>
      <Breadcrumb currentPageName="Sales" />
      <BarcodeArea />
      <Cart />
      <hr style={{ marginTop: "80px" }} />
      <MedecinesTable />
    </React.Fragment>
  );
};

export default Sales;
