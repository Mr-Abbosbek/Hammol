import { Pagination } from "@mui/material";
import React from "react";

function PaginationUi({ pageCount, handlePageClick }) {
  return (
    <Pagination
      showFirstButton showLastButton
      defaultPage={1}
      onChange={handlePageClick}
      count={pageCount}
      // variant="outlined"
      color="primary"
      size="large"
    />
  );
}

export default PaginationUi;
