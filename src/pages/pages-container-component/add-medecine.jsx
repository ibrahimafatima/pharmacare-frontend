import React from "react";

import Breadcrumb from "../../components/breadcrumb/breadcrumb.component";
import MedecineForm from "./../../components/forms/medecine-form.component";

const note =
  "The medecine once added can be viewed on the dashboard. Medecines details can also be updated after being added.";
const header = "Add Medecine here...";
const AddMedecine = ({ match }) => {
  return (
    <React.Fragment>
      <Breadcrumb
        currentPageName={
          match.params.id === "new" ? "Add Medecine" : "Update Medecine"
        }
      />
      <MedecineForm header={header} note={note} match={match} />
    </React.Fragment>
  );
};

export default AddMedecine;
