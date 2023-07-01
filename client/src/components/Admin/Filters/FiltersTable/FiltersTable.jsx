import { Box, Button, Paper, Table, TableContainer } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import BreadcrumbsApp from "../../../BreadcrumbsApp/BreadcrumbsApp";
import s from "../../../ComparisonTable/ComparisonTable.module.scss";
import FiltersTableHeader from "./FiltersTableHeader/FiltersTableHeader";
import FiltersTableBody from "./FiltersTableBody/FiltersTableBody";

const breadcrumbs = [
  {
    url: "/admin",
    label: "Dashboard",
  },
  {
    url: "/admin/filters",
    label: "Filters",
  },
];

const FiltersTable = () => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("type");
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        marginBottom={2}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <BreadcrumbsApp
          breadcrumbsCustomData={breadcrumbs}
          sx={{ padding: "0px 20px 0" }}
        />
        <Link to={"/admin/filters/new"}>
          <Button
            variant={"outlined"}
            sx={{
              border: "2px solid #0156FF",
              borderRadius: "50px",
              color: "#0156FF",
              width: "fit-content",
              "&:hover": {
                border: "2px solid #0156FF",
                backgroundColor: "#0156FF",
                color: "white",
              },
            }}
          >
            Add new filter
          </Button>
        </Link>
      </Box>
      <TableContainer component={Paper} className={s.table}>
        <Table aria-label="collapsible table" size={"small"}>
          <FiltersTableHeader
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <FiltersTableBody orderBy={orderBy} order={order} />
        </Table>
      </TableContainer>
    </>
  );
};

export default FiltersTable;
