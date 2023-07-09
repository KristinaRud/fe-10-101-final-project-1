import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { useEffect } from "react";
import TitleOfCollections from "../../../components/Admin/TitleOfCollections/TitleOfCollections";
import { fetchPartners } from "../../../store/actionCreator/partners.actionCreator";

const AdminPartners = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPartners());
  }, [dispatch]);
  return (
    <Container>
      <TitleOfCollections collection={"Partners"} />
      <Outlet />
    </Container>
  );
};

export default AdminPartners;
