import React from "react";
import MedecinesTable from "./../../components/medecines-table/medecines-table.component";
import Breadcrumb from "../../components/breadcrumb/breadcrumb.component";

const AllMedecines = () => {
  return (
    <React.Fragment>
      <Breadcrumb currentPageName="All Medecines" />
      <h1>All your medecines in Pharmacy</h1>
      <hr />
      <MedecinesTable currentPage="allMedecines" />
    </React.Fragment>
  );
};

export default AllMedecines;
