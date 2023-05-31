import { Button } from "@mui/material";
import PropTypes from "prop-types";
import s from "./FilterButton.module.scss";

const FilterButton = ({ onClick, children }) => {
  return (
    <Button variant="outlined" className={s.btn} onClick={onClick}>
      {children}
    </Button>
  );
};

FilterButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default FilterButton;
