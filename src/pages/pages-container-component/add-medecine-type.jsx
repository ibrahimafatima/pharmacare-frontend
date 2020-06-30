import React from "react";
import Breadcrumb from "../../components/breadcrumb/breadcrumb.component";
import MedecineTypesForm from "./../../components/forms/medecine-types-form.component";

const AddMedecineType = ({ match }) => {
  return (
    <React.Fragment>
      <Breadcrumb currentPageName="Medecine Types" />
      <MedecineTypesForm match={match} />
    </React.Fragment>
  );
};

export default AddMedecineType;
