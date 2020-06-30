import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Table from "./../table/table.component";
import AddToCart from "./../add-to-cart-btn/add-to-cart.component";
import Actions from "../actions-btn/medecine-actions.component";
import { selectTableElements } from "../../redux/medecines-table/medecines-tables.selector";
import { searchMedecine } from "./../../redux/medecines-table/medecines-tables.action";

const MedecinesTable = ({ elements, searchMedecine }) => {
  const columns = [
    { title: "Name", path: "name", className: "medecine" },
    { title: "Generic", path: "generic", className: "tc-center" },
    { title: "Type", path: "type", className: "tc-center" },
    { title: "Price", path: "price", className: "tc-center" },
    { title: "Quantity", path: "quantity", className: "tc-center" },
    { title: "Shelf", path: "shelf", className: "tc-center" },
    { title: "Rack", path: "rack", className: "tc-center" },
    {
      title: "Add To Cart",
      buttons: (medecine) => <AddToCart medecine={medecine} />,
      className: "tc-center",
    },
    {
      title: "Action",
      buttons: (medecine) => <Actions medecineId={medecine._id} />,
      className: "tc-center",
    },
  ];
  return (
    <Table
      columns={columns}
      elements={elements}
      count={elements.length}
      search={searchMedecine}
      title="All Pharmacy Medecines"
    />
  );
};

const mapStateToProps = createStructuredSelector({
  elements: selectTableElements,
});

const mapDispatchToProps = (dispatch) => ({
  searchMedecine: (searchWord) => dispatch(searchMedecine(searchWord)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MedecinesTable);
