import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
// eslint-disable-next-line import/no-extraneous-dependencies
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { filterByKey } from "../../../../utils/filterByKey";
import s from "./FilterItem.module.scss";
import { formatString } from "../../../../utils/formatString";
import { filterByPrice } from "../../../../utils/filterByPrice";

// eslint-disable-next-line react/prop-types
const FilterByKey = ({ filterOptions = [], keyOption }) => {
  const handleAddFilers = () => {
    // тут повинна бути функція, яка буде в стейт додавати фільтри
  };

  const renderOptions = () => {
    let filterArr = [];
    if (keyOption === "currentPrice") {
      filterArr = filterByPrice(filterOptions);
    } else {
      filterArr = filterByKey(filterOptions, keyOption);
    }
    return filterArr?.map((obj, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={index} className={s.filter_item}>
        <Typography
          variant="h6"
          component="span"
          fontSize={13}
          onClick={handleAddFilers}
        >
          {obj.range || obj[keyOption]}
        </Typography>
        <Typography variant="h6" component="span" fontSize={13}>
          {obj.counter}
        </Typography>
      </div>
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
          {keyOption === "currentPrice" ? "Price" : formatString(keyOption)}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={s.content}>
        {renderOptions()}
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterByKey;
