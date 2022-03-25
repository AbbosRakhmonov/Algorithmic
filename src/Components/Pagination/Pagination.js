import React from "react";
import ReactPaginate from "react-paginate";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "./for_pagination.scss";

function Pagination({ totalPages = 1, onPageChange }) {
  return (
    <ReactPaginate
      containerClassName={
        "table-pagination mb-3 mt-3 pagination justify-content-center"
      }
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
      disabledClassName={"disabled"}
      previousLabel={<IoChevronBack size={18} />}
      nextLabel={<IoChevronForward size={18} />}
      breakLabel={"..."}
      pageCount={totalPages}
      marginPagesDisplayed={5}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
    />
  );
}

export default Pagination;
