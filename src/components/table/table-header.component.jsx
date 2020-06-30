import React, { Component } from "react";
import { TiArrowSortedUp } from "react-icons/ti";

class TableHeader extends Component {
  sortObj = (column) => {
    const sort = { ...this.props.sort };
    if (sort.column === column)
      return { column, order: sort.order === "asc" ? "desc" : "asc" };
    else return { column, order: "asc" };
  };

  renderSortIcon = (column) => {
    if (column !== this.props.sort.column) return null;
    return <TiArrowSortedUp color="#fff" />;
  };

  render() {
    const { columns, onSort } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              className="tc-center sort-cur"
              key={column.title}
              onClick={() => onSort(this.sortObj(column.title.toLowerCase()))}
            >
              {column.title} {this.renderSortIcon(column.title.toLowerCase())}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
