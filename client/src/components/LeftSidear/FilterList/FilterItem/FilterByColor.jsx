import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CircularProgress,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { selectColors } from "../../../../store/selectors/colors.selector";
import { fetchColors } from "../../../../store/actionCreator/colors.actionCreator";
import s from "./FilterItem.module.scss";
import ColorItem from "./ColorItem/ColorItem";

const FilterByColor = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categories = searchParams.get("categories");
  const dispatch = useDispatch();
  const colorOptions = useSelector(selectColors);

  const renderOptions = () => {
    return colorOptions.map((obj) => {
      if (obj.count > 0) {
        return <ColorItem key={obj._id} {...obj} />;
      }
      return null;
    });
  };

  useEffect(() => {
    dispatch(fetchColors(`?categories=${categories}`));
  }, [categories, dispatch]);

  return (
    <Accordion className={s.wrapper}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="color-content"
        id="color-header"
      >
        <Typography variant="h6" component="h5" fontWeight={600} fontSize={14}>
          Color
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={s.colors}>
        {colorOptions.length > 0 ? renderOptions() : <CircularProgress />}
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterByColor;
