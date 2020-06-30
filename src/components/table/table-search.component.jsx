import React from "react";

const TableSearch = ({ search }) => {
  return (
    <div className="row">
      <div className="col-md-6"></div>
      <div className="col-md-6">
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-md-6 control-label">Search:</label>
            <div className=" col-md-6">
              <input
                className="form-control"
                type="text"
                onChange={(e) => {
                  search(e.target.value);
                }}
                placeholder="Search"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TableSearch;
