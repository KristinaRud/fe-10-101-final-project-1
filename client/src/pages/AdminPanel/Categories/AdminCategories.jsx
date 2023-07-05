import { Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import TitleOfCollections from "../../../components/Admin/TitleOfCollections/TitleOfCollections";
import { fetchCategories } from "../../../store/actionCreator/catalog.actionCreator";

const AdminCategories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Container>
      <TitleOfCollections collection={"Categories"} />
      <Outlet />
    </Container>
  );
};

export default AdminCategories;
