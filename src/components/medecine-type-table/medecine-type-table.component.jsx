import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Table from "./../table/table.component";
import TypeActions from "./../actions-btn/medecine-type-actions.component";
import { selectTypeElements } from "./../../redux/medecine-type-table/medecine-type.selector";
import { searchMedecineType } from "./../../redux/medecine-type-table/medecine-type.action";

const MedecineTypeTable = ({ elements, searchMedecineType }) => {
  const columns = [
    { title: "Type", path: "type", className: "tc-center" },
    {
      title: "Action",
      buttons: (typeId) => <TypeActions typeId={typeId} />,
      className: "tc-center",
    },
  ];
  return (
    <Table
      count={elements.length}
      columns={columns}
      elements={elements}
      search={searchMedecineType}
      title="All Medecine Types"
    />
  );
};

const mapStateToProps = createStructuredSelector({
  elements: selectTypeElements,
});

const mapDispatchToProps = (dispatch) => ({
  searchMedecineType: (searchWord) => dispatch(searchMedecineType(searchWord)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MedecineTypeTable);
