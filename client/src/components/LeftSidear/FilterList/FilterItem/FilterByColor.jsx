/* eslint-disable */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch } from "react-redux";
import { setFilters } from "../../../../store/slices/filters.slice";
import s from "./FilterItem.module.scss";

const FilterByColor = ({ colorOptions, data }) => {
  const dispatch = useDispatch();

  const handleAddFilers = (obj) => {
    dispatch(setFilters({ name: "color", value: [obj.name]}));
  };

  const renderOptions = () => {
    const neededColors = [];
    colorOptions.forEach((color) => {
      data.forEach((item) => {
        if (item.color === color.name) {
          neededColors.push(color);
        }
      });
    });

    const colors = [...new Set(neededColors)];

    return colors.map((obj) => (
      <span className={s.roundWrapper} key={obj.name}>
        <Typography
          sx={{ backgroundColor: obj.cssStyles }}
          variant="h6"
          component="span"
          className={s.round}
          onClick={()=>handleAddFilers(obj)}
        />
      </span>
    ));
  };

  return (
    <Accordion className={s.wrapper}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6" component="h5" fontWeight={600} fontSize={14}>
          Color
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={s.contentColor}>
        {renderOptions()}
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterByColor;
