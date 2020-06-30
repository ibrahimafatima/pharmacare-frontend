import React, { Component } from "react";
import quantityLabel from "../../utils/quantity-label";

class TableBody extends Component {
  renderColumn(element, column) {
    const pathValue = element[column.path];
    if (column.path === "quantity")
      return (
        <label className={`label ${quantityLabel(pathValue)} add-to-cart`}>
          {pathValue}
        </label>
      );
    if (column.buttons) return column.buttons(element);
    return pathValue;
  }

  render() {
    const { elements, columns } = this.props;
    return (
      <tbody>
        {elements.map((element) => (
          <tr key={element._id}>
            {columns.map((column) => (
              <td key={element._id + column.title} className={column.className}>
                {this.renderColumn(element, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
