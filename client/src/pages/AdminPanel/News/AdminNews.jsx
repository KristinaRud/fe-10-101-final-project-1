import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { useEffect } from "react";
import TitleOfCollections from "../../../components/Admin/TitleOfCollections/TitleOfCollections";
import { fetchNews } from "../../../store/actionCreator/news.actionCreator";

const AdminNews = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  return (
    <Container>
      <TitleOfCollections collection={"News"} />
      <Outlet />
    </Container>
  );
};

export default AdminNews;
