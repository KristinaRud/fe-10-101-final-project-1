import { Box, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import s from "./FilterTagItem.module.scss";

const FilterTagItem = ({ title, counter }) => {
  const handleDeleteFilterOption = () => {}; // видалити з стейту фільтр
  return (
    <Box className={s.wrapper}>
      <Typography variant="h6" component="span" fontSize={13} fontWeight={600}>
        {title}
        <span className={s.counter}>({counter})</span>
      </Typography>
      <Button
        variant="contained"
        className={s.btn}
        onClick={handleDeleteFilterOption}
      >
        X
      </Button>
    </Box>
  );
};

FilterTagItem.propTypes = {
  title: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
};

export default FilterTagItem;
