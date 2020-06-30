import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

const TablePagination = ({
  count,
  pageSize,
  onPageChange,
  currentPage,
  onPrevious,
  onNext,
}) => {
  const pageCount = Math.ceil(count / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(currentPage > 0 && currentPage, currentPage + 3);
  return (
    <div className="dt-pagination">
      <nav>
        <ul className="pagination">
          <li>
            <Link aria-label="Previous">
              <span aria-hidden="true" onClick={() => onPrevious(currentPage)}>
                Prev
              </span>
            </Link>
          </li>
          {pages.map((page) => (
            <li key={page}>
              <Link onClick={() => onPageChange(page)}>{page}</Link>
            </li>
          ))}
          <li>
            <Link aria-label="Next">
              <span
                aria-hidden="true"
                onClick={() => onNext(currentPage, pageCount)}
              >
                Next
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TablePagination;
