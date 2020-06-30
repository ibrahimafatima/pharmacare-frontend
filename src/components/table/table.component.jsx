import React, { Component } from "react";
import { FaTable } from "react-icons/fa";
import _ from "lodash";

import TableHeader from "./table-header.component";
import TableBody from "./table-body.component";
import TableSearch from "./table-search.component";
import TablePagination from "./table-pagination.component";
import { paginate } from "./../../utils/paginate";

class Table extends Component {
  state = {
    currentPage: 1,
    pageSize: 5,
    sort: { column: "name", order: "asc" },
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handlePrevious = (page) => {
    if (page > 1) this.setState({ currentPage: page - 1 });
    else {
      alert("You have reached the first page");
    }
  };

  handleNext = (page, totalPage) => {
    if (page < totalPage) this.setState({ currentPage: page + 1 });
    else {
      alert("You have reached the last page");
    }
  };

  handleSort = (sort) => {
    this.setState({ sort });
  };

  render() {
    const { columns, elements: allElement, title, count, search } = this.props;
    const { currentPage, pageSize, sort } = this.state;
    const sorted = _.sortBy(allElement, [sort.column], [sort.order]);
    const elements = paginate(sorted, currentPage, pageSize);
    return (
      <div className="box-widget widget-module">
        <div className="widget-head clearfix">
          <span className="h-icon">
            <FaTable />
          </span>
          <h4>{title}</h4>
        </div>
        <div className="widget-container">
          <div className="widget-block">
            <TableSearch search={search} />
            <div className="table-responsive">
              <table className="table table-hover table-bordered matmix-dt bg-hc-border">
                <TableHeader
                  columns={columns}
                  sort={sort}
                  onSort={this.handleSort}
                />
                {elements.length > 0 ? (
                  <TableBody columns={columns} elements={elements} />
                ) : (
                  <h3 className="no-data">No data in table yet</h3>
                )}
              </table>
            </div>
            <TablePagination
              pageSize={pageSize}
              currentPage={currentPage}
              count={count}
              onPageChange={this.handlePageChange}
              onPrevious={this.handlePrevious}
              onNext={this.handleNext}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
