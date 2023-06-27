import { Box, Button, Paper, Table, TableContainer } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BreadcrumbsApp from "../../../BreadcrumbsApp/BreadcrumbsApp";
import ProductsTableHeader from "./ProductsTableHeader/ProductsTableHeader";
import s from "../../../ComparisonTable/ComparisonTable.module.scss";
import ProductsTableBody from "./ProductsTableBody/ProductsTableBody";

const breadcrumbs = [
  {
    url: "/admin",
    label: "Dashboard",
  },
  {
    url: "/admin/products",
    label: "Products",
  },
];

const ProductsTable = () => {
  const { products } = useSelector((state) => state.products);
  console.log(products);
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
        <Link to={"/admin/products/new"}>
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
            Add new product
          </Button>
        </Link>
      </Box>
      <TableContainer component={Paper} className={s.table}>
        <Table aria-label="collapsible table" size={"small"}>
          <ProductsTableHeader />
          {Object.keys(products).length > 0 && (
            <ProductsTableBody data={products.products} />
          )}
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductsTable;
