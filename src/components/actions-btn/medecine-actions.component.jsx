import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { deleteMedecine } from "../../redux/medecines-table/medecines-tables.action";

const Actions = ({ medecineId, deleteMedecine }) => {
  return (
    <div className="btn-toolbar" role="toolbar">
      <div className="btn-group" role="group">
        <Link
          className="btn btn-default btn-sm m-user-edit"
          to={`/dashboard/add-medecine/${medecineId}`}
        >
          Edit
        </Link>
        <Link
          className="btn btn-default btn-sm m-user-delete"
          style={{ color: "red" }}
          onClick={() => deleteMedecine(medecineId)}
        >
          Delete
        </Link>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteMedecine: (medecineId) => dispatch(deleteMedecine(medecineId)),
});

export default connect(null, mapDispatchToProps)(Actions);
