import { Box, Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import s from "./FilterTagItem.module.scss";
import { deleteFilter } from "../../../store/slices/filters.slice";

const FilterTagItem = ({ title, name }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const handleDeleteFilterOption = () => {
    if (name !== "currentPrice") {
      const query = searchParams.get(name);
      if (query) {
        const queryArr = query.split(",");
        if (queryArr.length === 1) {
          searchParams.delete(name);
        } else {
          const newParams = queryArr.filter((item) => item !== title).join(",");
          searchParams.set(name, newParams);
        }
        navigate(`?${searchParams.toString()}`);
      }
      dispatch(deleteFilter({ value: title, name }));
    } else {
      const minPrice = searchParams.get("minPrice");
      const maxPrice = searchParams.get("maxPrice");
      if (minPrice && maxPrice) {
        searchParams.delete("minPrice");
        searchParams.delete("maxPrice");
        navigate(`?${searchParams.toString()}`);
      }
      dispatch(deleteFilter({ value: title, name: "currentPrice" }));
    }
  };

  return (
    <Box className={s.wrapper}>
      <Typography variant="h6" component="span" fontSize={13} fontWeight={600}>
        {title}
      </Typography>
      <Button
        variant="contained"
        className={s.btn}
        onClick={handleDeleteFilterOption}
      >
        <CloseIcon className={s.delete} />
      </Button>
    </Box>
  );
};

FilterTagItem.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FilterTagItem;
