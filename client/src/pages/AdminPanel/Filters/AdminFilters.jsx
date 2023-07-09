import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import TitleOfCollections from "../../../components/Admin/TitleOfCollections/TitleOfCollections";
import { fetchColors } from "../../../store/actionCreator/colors.actionCreator";
import { fetchFiltersData } from "../../../store/actionCreator/filters.actionCreator";
import { fetchProducts } from "../../../store/actionCreator/products.actionCreator";

const AdminFilters = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFiltersData(""));
    dispatch(fetchColors());
    dispatch(fetchProducts(""));
  }, [dispatch]);
  return (
    <Container>
      <TitleOfCollections collection={"Filters"} />
      <Outlet />
    </Container>
  );
};

export default AdminFilters;
