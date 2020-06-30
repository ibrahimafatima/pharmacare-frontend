import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { deleteMedecineType } from "./../../redux/medecine-type-table/medecine-type.action";

const TypeActions = ({ deleteMedecineType, typeId }) => {
  return (
    <div className="btn-toolbar" role="toolbar">
      <div className="btn-group" role="group">
        <Link
          className="btn btn-default btn-sm m-user-edit"
          to={`/dashboard/add-medecine-type/${typeId}`}
        >
          Edit
        </Link>
        <Link
          className="btn btn-default btn-sm m-user-delete"
          style={{ color: "red" }}
          onClick={() => deleteMedecineType(typeId)}
        >
          Delete
        </Link>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteMedecineType: (typeId) => dispatch(deleteMedecineType(typeId)),
});

export default connect(null, mapDispatchToProps)(TypeActions);
