import React from "react";

import Breadcrumb from "./../../components/breadcrumb/breadcrumb.component";
import FreezeMedecineForm from "./../../components/forms/freeze-medecine-form.component";

const FreezeMedecine = () => {
  return (
    <React.Fragment>
      <Breadcrumb currentPageName="Freeze Medecine" />
      <FreezeMedecineForm />
    </React.Fragment>
  );
};

export default FreezeMedecine;
