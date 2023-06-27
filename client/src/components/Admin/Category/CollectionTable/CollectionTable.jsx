import { Box, Button, Paper, Table, TableContainer } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CollectionTableHeader from "./CollectionTableHeader/CollectionTableHeader";
import CollectionTableBody from "./CollectionTableBody/CollectionTableBody";
import { allCategoriesSelector } from "../../../../store/selectors/catalog.selector";
import BreadcrumbsApp from "../../../BreadcrumbsApp/BreadcrumbsApp";
import s from "../../../ComparisonTable/ComparisonTable.module.scss";

const breadcrumbs = [
  {
    url: "/admin",
    label: "Dashboard",
  },
  {
    url: "/admin/categories",
    label: "Categories",
  },
];

const CollectionTable = () => {
  const data = useSelector(allCategoriesSelector);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
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
        <Link to={"/admin/categories/new"}>
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
            Add new category
          </Button>
        </Link>
      </Box>
      <TableContainer component={Paper} className={s.table}>
        <Table aria-label="collapsible table" size={"small"}>
          <CollectionTableHeader
            orderBy={orderBy}
            order={order}
            onRequestSort={handleRequestSort}
          />
          <CollectionTableBody data={data} orderBy={orderBy} order={order} />
        </Table>
      </TableContainer>
    </>
  );
};

export default CollectionTable;
