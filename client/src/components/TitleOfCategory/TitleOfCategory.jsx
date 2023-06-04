import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { formatString } from "../../utils/formatString";
import s from "./TitleOfCategory.module.scss";

const TitleOfCategory = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const category = query.get("categories");

  return (
    <Typography variant="h4" className={s.title}>
      {formatString(category)}
    </Typography>
  );
};

export default TitleOfCategory;
