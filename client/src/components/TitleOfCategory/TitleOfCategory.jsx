import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import s from "./TitleOfCategory.module.scss";
import { replaceDashWithSpace } from "../../utils/string/replaceDashWithSpace";

const TitleOfCategory = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const category = query.get("categories");

  return (
    <Typography variant="h4" className={s.title}>
      {replaceDashWithSpace(category)}
    </Typography>
  );
};

export default TitleOfCategory;
