import React from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
} from "@material-ui/core";
import TablePaginationActions from "./TablePagination";

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

export const TableData = ({ data }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableBody>
          {(rowsPerPage > 0
            ? (data || []).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : data
          ).map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.length} length
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.search(/[A-Z]+/g) ? "LowerCase" : "UpperCase"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

TableData.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TableData;
