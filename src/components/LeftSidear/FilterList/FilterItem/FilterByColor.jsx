import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
// eslint-disable-next-line import/no-extraneous-dependencies
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import s from "./FilterItem.module.scss";

// eslint-disable-next-line react/prop-types
const FilterByColor = ({ colorOptions, data }) => {
  const handleAddFilers = () => {
    // тут повинна бути функція, яка буде в стейт додавати фільтри, після реалізувати ектів для фільтра
  };
  const renderOptions = () => {
    const neededColors = [];
    // eslint-disable-next-line react/prop-types
    colorOptions.forEach((color) => {
      // eslint-disable-next-line react/prop-types
      data.forEach((item) => {
        if (item.color === color.name) {
          neededColors.push(color);
        }
      });
    });
    const colors = [...new Set(neededColors)];

    return colors?.map((obj) => (
      <span className={s.roundWrapper}>
        <Typography
          key={obj.cssStyles}
          sx={{ backgroundColor: obj.cssStyles }}
          variant="h6"
          component="span"
          className={s.round}
          onClick={handleAddFilers}
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
