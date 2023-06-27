import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import s from "../../TitleOfCategory/TitleOfCategory.module.scss";

const TitleOfCollections = ({ collection }) => {
  return (
    <Typography variant="h4" className={s.title}>
      {collection}
    </Typography>
  );
};

TitleOfCollections.propTypes = {
  collection: PropTypes.string.isRequired,
};

export default TitleOfCollections;
