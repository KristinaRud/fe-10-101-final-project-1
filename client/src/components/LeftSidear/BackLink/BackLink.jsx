import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import s from "./BackLink.module.scss";

const BackLink = () => {
  return (
    <Typography variant="h6" component="div" className={s.link}>
      <Link to="/">‹ Back</Link>
    </Typography>
  );
};

export default BackLink;
