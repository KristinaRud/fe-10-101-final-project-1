import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  FormGroup,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
import { formatString } from "../../../../utils/string/formatString";
import s from "./FilterItem.module.scss";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

const FilterByKey = ({ filterData }) => {
  return (
    <Accordion className={s.wrapper}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="filter-content"
        id="filter-header"
      >
        <Typography variant="h6" component="h5" fontWeight={600} fontSize={14}>
          {formatString(filterData[0].type)}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={s.content}>
        <FormGroup>
          {filterData.map((obj) => (
            <FilterCheckbox key={obj._id} {...obj} />
          ))}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

FilterByKey.propTypes = {
  filterData: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      count: PropTypes.number,
      name: PropTypes.string,
      type: PropTypes.string,
      _id: PropTypes.string,
    }),
  ),
};

export default FilterByKey;
