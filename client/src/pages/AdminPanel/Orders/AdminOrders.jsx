import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TitleOfCollections from "../../../components/Admin/TitleOfCollections/TitleOfCollections";
import { getFilteredOrders } from "../../../store/actionCreator/orders.actionCreator";
import OrdersTable from "../../../components/Admin/Orders/OrdersTable/OrdersTable";
import { fetchCategories } from "../../../store/actionCreator/catalog.actionCreator";
import { fetchProducts } from "../../../store/actionCreator/products.actionCreator";

const AdminOrders = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    dispatch(getFilteredOrders(`?${params.toString()}`));
  }, [dispatch, location.search]);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts(""));
  }, [dispatch]);
  return (
    <Container>
      <TitleOfCollections collection={"Orders"} />
      <OrdersTable />
    </Container>
  );
};

export default AdminOrders;
