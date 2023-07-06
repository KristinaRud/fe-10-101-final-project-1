import { Container } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import TitleOfCollections from "../../../components/Admin/TitleOfCollections/TitleOfCollections";
import { fetchProducts } from "../../../store/actionCreator/products.actionCreator";
import { fetchCategories } from "../../../store/actionCreator/catalog.actionCreator";

const AdminProducts = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  useEffect(() => {
    dispatch(fetchProducts(`?${params.toString()}`));
  }, [dispatch, params]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <Container>
      <TitleOfCollections collection={"Products"} />
      <Outlet />
    </Container>
  );
};

export default AdminProducts;
