import React from "react";
import Breadcrumb from "../../components/breadcrumb/breadcrumb.component";
import MedecineTypeTable from "../../components/medecine-type-table/medecine-type-table.component";

const AllMedecineType = () => {
  return (
    <React.Fragment>
      <Breadcrumb currentPageName="All Medecine Type" />
      <h1>All Medecine type are here...</h1>
      <hr />
      <MedecineTypeTable />
    </React.Fragment>
  );
};

export default AllMedecineType;
