import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import TitleOfCollections from "../../../components/Admin/TitleOfCollections/TitleOfCollections";
import { fetchOrders } from "../../../store/actionCreator/orders.actionCreator";

const AdminOrders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrders());
  });
  return (
    <Container>
      <TitleOfCollections collection={"Orders"} />
    </Container>
  );
};

export default AdminOrders;
