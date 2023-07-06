import { Box, Paper, Table, TableContainer } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import BreadcrumbsApp from "../../../BreadcrumbsApp/BreadcrumbsApp";
import s from "../../../ComparisonTable/ComparisonTable.module.scss";
import OrdersTableHeader from "./OrdersTableHeader/OrdersTableHeader";
import OrdersTableBody from "./OrdersTableBody/OrdersTableBody";
import ProductTableFooter from "../../Products/ProductsTable/ProductTableFooter/ProductTableFooter";
import OrdersFilter from "../OrdersFilter/OrdersFilter";
import ExportButton from "../ExportButton/ExportButton";

const breadcrumbs = [
  {
    url: "/admin",
    label: "Dashboard",
  },
  {
    url: "/admin/orders",
    label: "Orders",
  },
];

const OrdersTable = () => {
  const [selected, setSelected] = useState([]);
  const { orders } = useSelector((state) => state.orders);
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = orders.orders.map((n) => n.orderNo);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
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
        <ExportButton selected={selected} />
      </Box>
      <OrdersFilter />
      <TableContainer component={Paper} className={s.table}>
        <Table aria-label="collapsible table" size={"small"}>
          {Object.keys(orders).length > 0 && (
            <>
              <OrdersTableHeader
                numSelected={selected.length}
                rowCount={orders.orders.length}
                onSelectAllClick={handleSelectAllClick}
              />
              <OrdersTableBody selected={selected} setSelected={setSelected} />
              <ProductTableFooter productsQuantity={orders.ordersQuantity} />
            </>
          )}
        </Table>
      </TableContainer>
    </>
  );
};

export default OrdersTable;
